import struct
import sys
import zlib

PNG_SIGNATURE = b"\x89PNG\r\n\x1a\n"

FILTER_NONE = 0
FILTER_SUB = 1
FILTER_UP = 2
FILTER_AVERAGE = 3
FILTER_PAETH = 4


def paeth_predictor(a, b, c):
    p = a + b - c
    pa = abs(p - a)
    pb = abs(p - b)
    pc = abs(p - c)
    if pa <= pb and pa <= pc:
        return a
    if pb <= pc:
        return b
    return c


def parse_png_header(path):
    with open(path, 'rb') as f:
        data = f.read()
    if data[:8] != PNG_SIGNATURE:
        raise ValueError('Not a PNG file')
    offset = 8
    width = height = None
    bit_depth = color_type = None
    chunks = []
    while offset < len(data):
        length = struct.unpack('>I', data[offset:offset+4])[0]
        offset += 4
        chunk_type = data[offset:offset+4]
        offset += 4
        chunk_data = data[offset:offset+length]
        offset += length
        offset += 4  # skip CRC
        if chunk_type == b'IHDR':
            width, height, bit_depth, color_type, _, _, _ = struct.unpack('>IIBBBBB', chunk_data)
        elif chunk_type == b'IDAT':
            chunks.append(chunk_data)
        elif chunk_type == b'IEND':
            break
    if width is None:
        raise ValueError('IHDR not found')
    compressed = b''.join(chunks)
    return width, height, bit_depth, color_type, compressed


def color_at(path, x, y):
    width, height, bit_depth, color_type, compressed = parse_png_header(path)
    if bit_depth != 8 or color_type not in (2, 6):
        raise NotImplementedError('Unsupported PNG format')
    if not (0 <= x < width and 0 <= y < height):
        raise ValueError('Coordinate out of bounds')
    bpp = 4 if color_type == 6 else 3
    stride = width * bpp
    raw = memoryview(zlib.decompress(compressed))
    prev_row = bytearray(stride)
    idx = 0
    for row_idx in range(height):
        filter_type = raw[idx]
        idx += 1
        row = bytearray(raw[idx:idx+stride])
        idx += stride
        if filter_type == FILTER_SUB:
            for i in range(bpp, stride):
                row[i] = (row[i] + row[i - bpp]) & 0xFF
        elif filter_type == FILTER_UP:
            for i in range(stride):
                row[i] = (row[i] + prev_row[i]) & 0xFF
        elif filter_type == FILTER_AVERAGE:
            for i in range(stride):
                left = row[i - bpp] if i >= bpp else 0
                up = prev_row[i]
                row[i] = (row[i] + ((left + up) // 2)) & 0xFF
        elif filter_type == FILTER_PAETH:
            for i in range(stride):
                left = row[i - bpp] if i >= bpp else 0
                up = prev_row[i]
                up_left = prev_row[i - bpp] if i >= bpp else 0
                row[i] = (row[i] + paeth_predictor(left, up, up_left)) & 0xFF
        elif filter_type != FILTER_NONE:
            raise NotImplementedError('Unsupported filter type %s' % filter_type)
        if row_idx == y:
            r, g, b = row[x*bpp:x*bpp+3]
            return '#%02X%02X%02X' % (r, g, b)
        prev_row[:] = row
    raise RuntimeError('Row not found')


def main():
    if len(sys.argv) != 4:
        print('Usage: python3 sample_color.py <image> <x> <y>')
        return
    image, x, y = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
    print(color_at(image, x, y))


if __name__ == '__main__':
    main()
