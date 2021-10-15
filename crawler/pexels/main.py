from PIL import Image
import requests
from io import BytesIO
import time
HOST = 'https://multilind-content-stagging.herokuapp.com'
HOST_FILES = 'http://localhost:5000/api/files/'
API_KEY = '563492ad6f917000010000012e4ff89fb7804dfe807c0eb3298317ab'
linguas_response = requests.get(f"{HOST}/lingua")
linguas = linguas_response.json()
error = None
for lingua in linguas:
    id_lingua = lingua['id_lingua']
    palavras_response = requests.get(f"{HOST}/palavra/all/{id_lingua}")
    palavras_por_lingua = palavras_response.json()
    for ppl in palavras_por_lingua:
        palavras = ppl['palavras']
        for palavra in palavras:
            significado = palavra['significado']
            id_palavra = palavra['id_palavra']
            ja_existe_response = requests.get(f"{HOST_FILES}{id_palavra}").json()
            if(len(ja_existe_response)==0):
                while(True):
                    imagem_response = requests.get(f'https://api.pexels.com/v1/search?query={significado}&locale=pt-BR&per_page=1', headers={'Authorization': API_KEY})
                    imagem = imagem_response.json()
                    if('total_results' in imagem):
                        results = imagem['total_results']
                        if(results>0):
                            try:
                                url = imagem['photos'][0]['src']['tiny']
                                print(url)
                                image_bytes_response = requests.get(url)
                                img = Image.open(BytesIO(image_bytes_response.content))
                                # with open(f"{significado}.{img.format}", "wb") as imagem_arquivo:
                                #     imagem_arquivo.write(image_bytes_response.content)
                                #     imagem_arquivo.close()
                                # with open(, "rb") as a_file:
                                #     file_dict = {f"{significado}.{img.format}": a_file}
                                insert_response = requests.post(f"{HOST_FILES}{id_palavra}", files={'file': (f"{significado}.{img.format}", image_bytes_response.content, Image.MIME[img.format])})
                                print(insert_response.text)
                            except error:
                                print(error)
                    else:
                        print('awaiting..')
                        time.sleep(60)
                    

