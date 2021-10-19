from PIL import Image
import requests
from io import BytesIO
import time
HOST = 'https://multilind-content-stagging.herokuapp.com'
HOST_FILES = 'http://localhost:5000/api/files/'
API_KEY = '563492ad6f917000010000013a3ea2a8854b4982a72e0e8cdd0b2413'
linguas_response = requests.get(f"{HOST}/lingua")
linguas = linguas_response.json()
error = None
for lingua in linguas:
    id_lingua = lingua['id_lingua']
    palavras_response = requests.get(f"{HOST}/palavra/all/{id_lingua}")
    palavras_por_lingua = palavras_response.json()['palavras']
    for palavra in palavras_por_lingua:
        significado = palavra['significado']
        id_palavra = palavra['id_palavra']
        ja_existe_response = requests.get(f"{HOST_FILES}{id_palavra}").json()
        if(len(ja_existe_response)==0):
            while(True):
                try:
                    print(f"{significado}.JPEG")
                    autor = None
                    with open(f"{significado}.txt", "rb") as autor_txt:
                            autor = autor_txt.read()
                            autor_txt.close()
                    with open(f"{significado}.JPEG", "rb") as imagem_arquivo:
                        print('Inserindo via arquivo aberto')
                        print('Autor: ')
                        print(autor)
                        print('Id Palavra: ')
                        print(id_palavra)
                        insert_response = requests.post(f"{HOST_FILES}{id_palavra}", files={'file': (f"{significado}.JPEG", imagem_arquivo, Image.MIME['JPEG'])}, data={'autor': autor, 'fonte': 'pexels.com'})
                        imagem_arquivo.close()
                    break
                except:
                    print('Inserindo via arquivo baixado')
                    imagem_response = requests.get(f'https://api.pexels.com/v1/search?query={significado}&locale=pt-BR&per_page=1', headers={'Authorization': API_KEY})
                    imagem = imagem_response.json()
                    print(imagem)
                    if('total_results' in imagem):
                        results = imagem['total_results']
                        if(results>0):
                            try:
                                url = imagem['photos'][0]['src']['tiny']
                                print(url)
                                image_bytes_response = requests.get(url)
                                img = Image.open(BytesIO(image_bytes_response.content))
                                autor = imagem['photos'][0]['photographer']
                                with open(f"{significado}.{img.format}", "wb") as imagem_arquivo:
                                    imagem_arquivo.write(image_bytes_response.content)
                                    imagem_arquivo.close()
                                with open(f"{significado}.txt", "w") as autor_txt:
                                    autor_txt.write(autor)
                                    autor_txt.close()
                                # with open(, "rb") as a_file:
                                #     file_dict = {f"{significado}.{img.format}": a_file}
                                insert_response = requests.post(f"{HOST_FILES}{id_palavra}", files={'file': (f"{significado}.{img.format}", image_bytes_response.content, Image.MIME[img.format])}, data={'autor': autor, 'fonte': 'pexels.com'})
                                print(insert_response.text)
                                break
                            except error:
                                print(error)
                                break
                        else:
                            break
                    else:
                        print('awaiting..')
                        time.sleep(60)
                    

