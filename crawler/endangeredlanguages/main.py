import pandas as pd
import re
df = pd.read_csv('database_file.csv')
for value in df.values:
    if(re.match(r".*Brazil", str(value[10]))):
        lingua = value[2]
        outros_nomes = re.sub(r'(.*)\s?(;)\s?(.*);\s?', r'\1\2\3', str(value[3])).replace('\r', '').replace('\n', '').replace('; ', ';').split(';')
        print('LINGUA: '+lingua)
        print('TAMBÉM CONHECIDA COMO: '+', '.join(outros_nomes))
        posicao = None
        if(str(value[12])!='nan'):
            if(';' in value[12]):
                posicao = str(value[12]).replace(' ', '').split(';')[0].split(',')
            else:
                posicao = str(value[12]).replace(' ', '').split(',')
        if(posicao):
            print('POSICAO GEOGRAFICA: '+' '.join(posicao))
        else:
            print('POSICAO GEOGRAFICA INVALIDA OU INDISPONIVEL')
