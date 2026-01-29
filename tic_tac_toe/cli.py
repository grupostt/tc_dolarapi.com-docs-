def print_board(b):
    for i in range(3):
        row = ' | '.join(b[3*i:3*i+3])
        print(' ' + row)
        if i < 2:
            print('---+---+---')


def check_winner(b):
    lines = [
        (0,1,2),(3,4,5),(6,7,8),
        (0,3,6),(1,4,7),(2,5,8),
        (0,4,8),(2,4,6)
    ]
    for a,b_idx,c in lines:
        if b[a] != ' ' and b[a] == b[b_idx] == b[c]:
            return b[a]
    return None


def is_tie(b):
    return all(cell != ' ' for cell in b)


def get_move(player, board):
    while True:
        try:
            s = input(f"Jugador {player}, ingresa una casilla (1-9): ")
            pos = int(s) - 1
            if pos < 0 or pos > 8:
                print("Posición inválida. Usa 1-9.")
                continue
            if board[pos] != ' ':
                print("Casilla ocupada. Elige otra.")
                continue
            return pos
        except ValueError:
            print("Entrada inválida. Ingresa un número entre 1 y 9.")


def main():
    board = [' ']*9
    current = 'X'
    print("Juego de Gato - CLI")
    print_board([str(i+1) for i in range(9)])
    while True:
        print('\nTablero actual:')
        print_board(board)
        pos = get_move(current, board)
        board[pos] = current
        winner = check_winner(board)
        if winner:
            print_board(board)
            print(f"¡Gana {winner}!")
            break
        if is_tie(board):
            print_board(board)
            print("Empate.")
            break
        current = 'O' if current == 'X' else 'X'


if __name__ == '__main__':
    main()
