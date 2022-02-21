/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js')

const firebaseConfig = {
  apiKey: 'AIzaSyDzA_JxwNXn8u3paYgEa7TB_wz6xCKUq2g',
  authDomain: 'jeremy-tenjo-tutorials.firebaseapp.com',
  projectId: 'jeremy-tenjo-tutorials',
  storageBucket: 'jeremy-tenjo-tutorials.appspot.com',
  messagingSenderId: '237035005827',
  appId: '1:237035005827:web:5b22520f6a39a70af2f8b6',
  measurementId: 'G-FE6WB28341',
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || payload.notification.image,
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('notificationclick', (event) => {
  if (event.action) {
    clients.openWindow(event.action)
  }
  event.notification.close()
})
