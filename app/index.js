import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// Importando todos os componentes que serão utilizados na tela
import { useRouter } from "expo-router"; // Importando o hook de navegação

//  hook é um ponto específico onde você pode "enganchar" um comportamento extra dentro de um sistema sem precisar modificá-lo diretamente.
//Ou seja, um hook permite adicionar funcionalidades em um fluxo sem alterar o código principal.

export default function Index() {
  const router = useRouter(); // Hook para navegação

  return (
    <View style={styles.container}>
      //View nada mais é que uma Div
      <View style={styles.infos}>
        // a palavra depois do . do styles é tipo a classe ou id do html, serve
        pra chamar e estilizar no "CSS" la embaixo
        <Image
          style={styles.imagem}
          source={require("../assets/Logo/logoMontVivaBranca.png")}
        />
        <Text style={styles.text}>Seu novo app de Montagem de móveis!</Text>
        <TouchableOpacity
          onPress={() => router.push("/home")} // função para navegar para a tela home
          style={styles.button}
        >
          <Text style={styles.TextButton}>Acessar Home</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.p}>Desenvolvido por @andyxdev_</Text>
    </View>
  );
}

// O famoso CSS ( literalmente )

const styles = StyleSheet.create({
  imagem: {
    width: 300,
    height: 300,
  },

  text: {
    color: "#fff",
    fontSize: 18,
    marginTop: -30,
  },

  button: {
    marginTop: 120,
    width: 250,
    height: 60,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  TextButton: {
    color: "#fff",
    fontSize: 25,
  },

  infos: {
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    width: "100%",
    marginBottom: 0,
    marginTop: 130,
  },

  p: {
    color: "#fff",
    fontSize: 13,
    marginTop: 60,
    textAlign: "center",
  },

  container: {
    backgroundColor: "#250E03",
    flex: 1,
  },
});
