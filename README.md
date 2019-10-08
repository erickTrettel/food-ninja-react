Projeto modelo para construção de PWA (Progressive Web Apps) com Offline-mode

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Como rodar?

Para iniciar o projeto, digite o comando:

### `npm start`

Porém, devido a falta da API não será possível fazer as requisições para um servidor.<br>

## Passo-a-passo para criar um novo PWA

Seguindo esse tutorial, você será capaz de criar um **Progressive Web App** do zero.

### Manifest

O [**Manifest**](https://developers.google.com/web/fundamentals/web-app-manifest) é um arquivo no formato JSON que funciona como uma "etiqueta" para o navegador com informações sobre sua aplicação. <br>
Deve seguir o seguinte formato:<br>

`{ <br>
  "short_name": "Maps", <br>
  "name": "Google Maps", <br>
  "icons": [ <br>
    { <br>
      "src": "/images/icons-192.png", <br>
      "type": "image/png", <br>
      "sizes": "192x192" <br>
    }, <br>
    { <br>
      "src": "/images/icons-512.png", <br>
      "type": "image/png", <br>
      "sizes": "512x512" <br>
    } <br>
  ], <br>
  "start_url": "/maps/?source=pwa", <br>
  "background_color": "#3367D6", <br>
  "display": "standalone", <br>
  "scope": "/maps/", <br>
  "theme_color": "#3367D6" <br>
}` <br>

Após criar seu arquivo manifest.json, você deve referenciá-lo no seu arquivo **index.html**: <br>

`<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />` <br>

#### Outras tags para o index.html

Para otimizar seu PWA, você pode também adicionar as seguintes tags:<br>

´<meta name="theme-color" content="#000000" />´ <br>

Para iOS:

´<link rel="apple-touch-icon" href="/icons/icons-96x96.png">
<meta name="apple-mobile-web-app-status-bar" content="#aa7700">´

### Service workers

Para ter um PWA completo, adicione um service worker que possua fetch event na sua aplicação.
Service workers são scripts que rodam em paralelo com sua aplicação e executam operações no background. <br>

Para registrar um novo service worker:

´if('serviceWorker' in navigator) { 
  navigator.serviceWorker.register('/sw.js')
    .catch((err) => console.log("service worker not registered", err));
}´
