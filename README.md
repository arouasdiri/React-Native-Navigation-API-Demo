# React Native Navigation und API-Demo

Dieses Projekt ist eine Beispielanwendung, die die Verwendung von React Native für die Navigation zwischen verschiedenen Bildschirmen und das Abrufen von Daten über API-Aufrufe demonstriert.

## Installation

1. **Klonen Sie dieses Repository auf Ihren lokalen Computer:**

   ```bash
   git clone <Repository-URL>
   ```

2. **Wechseln Sie in das Projektverzeichnis:**

   ```bash
   cd react-native-navigation-api-demo
   ```

3. **Installieren Sie die Abhängigkeiten:**
   ```bash
   npm install
   # oder
   yarn install
   ```

## Verwendung

Um die Anwendung auszuführen, verwenden Sie einen der folgenden Befehle, je nachdem, ob Sie ein Expo-Projekt haben oder nicht:

- **Für Expo-Projekte:**

  ```bash
  expo start
  ```

- **Für Nicht-Expo-Projekte (Android):**

  ```bash
  npx react-native run-android
  ```

- **Für Nicht-Expo-Projekte (iOS):**
  ```bash
  npx react-native run-ios
  ```

## Funktionen

- Die Startseite lädt eine Liste von Elementen über eine öffentliche API (JSONPlaceholder) und ermöglicht es dem Benutzer, Elemente auszuwählen, um Details anzuzeigen.
- Die Detailseite zeigt die Details des ausgewählten Elements an.

## Bibliotheken und Tools

- **React Navigation:** Eine beliebte Navigationsbibliothek für React Native.
- **Axios:** Eine einfach zu verwendende HTTP-Clientbibliothek für Node.js und den Browser.


