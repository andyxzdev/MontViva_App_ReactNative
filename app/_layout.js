import { Stack } from "expo-router";

export default function Layout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}

//layout é o arquivo que vai conter todas as rotas e padrões do app
//Stack é um componente de navegação do expo-router
//screenOptions é uma propriedade do Stack que define opções de navegação
//headerShown é uma propriedade que define se o cabeçalho da tela vai ser mostrado ou não
