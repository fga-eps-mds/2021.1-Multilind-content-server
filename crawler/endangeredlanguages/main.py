import pandas as pd
import re
df = pd.read_csv('database_file.csv')
for value in df.values:
    if(re.match(r".*Brazil", str(value[10]))):
        lingua = value[2]
        povos = re.sub(r'(.*)\s?(;)\s?(.*)', r'\1\2\3', str(value[3])).replace('\r', '').replace('\n', '').split(';')
        
        print(povos)
