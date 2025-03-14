import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.DivLogo}>
        <Image
          style={styles.imglogo}
          source={require("../assets/Logo/logoMontVivaBranca.png")}
        />
      </View>
      <Text style={styles.texto}>Selecione a categoria</Text>

      <View style={styles.categorias}>
        //--------------------------------
        <View style={styles.linha1}>
          <View style={styles.divbotaoesq}>
            <TouchableOpacity
              onPress={() => router.push("/index")}
              style={styles.botao}
            ></TouchableOpacity>
            <Text style={styles.textCategorias}>Cadeira</Text>
          </View>

          <View style={styles.divbotaodirComoda}>
            <TouchableOpacity
              onPress={() => router.push("/index")}
              style={styles.botao}
            ></TouchableOpacity>
            <Text style={styles.textCategoriasComoda}>Guarda-Roupa</Text>
          </View>
        </View>
        //--------------------------------
        <View style={styles.linha2}>
          <View style={styles.divbotaoesq}>
            <TouchableOpacity
              onPress={() => router.push("/index")}
              style={styles.botao}
            ></TouchableOpacity>
            <Text style={styles.textCategorias}>Mesa</Text>
          </View>

          <View style={styles.divbotaodir}>
            <TouchableOpacity
              onPress={() => router.push("/index")}
              style={styles.botao}
            ></TouchableOpacity>
            <Text style={styles.textCategorias}>Sofá</Text>
          </View>
        </View>
        //--------------------------------
        <View style={styles.linha3}>
          <View style={styles.divbotaoesq}>
            <TouchableOpacity
              onPress={() => router.push("/index")}
              style={styles.botao}
            ></TouchableOpacity>
            <Text style={styles.textCategorias}>Cama</Text>
          </View>

          <View style={styles.divbotaodir}>
            <TouchableOpacity
              onPress={() => router.push("/index")}
              style={styles.botao}
            ></TouchableOpacity>
            <Text style={styles.textCategorias}>Cômoda</Text>
          </View>
        </View>
        //--------------------------------
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },

  DivLogo: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#250E03",
    width: "130%",
    height: "40%",
    borderWidth: 1,
    borderRadius: 150,
    marginTop: -120,
  },

  imglogo: {
    width: 120,
    height: 120,
    marginTop: 120,
  },

  texto: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },
  categorias: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "95%",
    height: "500",
    marginTop: 25,
  },

  divbotaoesq: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 60,
  },
  divbotaodir: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 60,
  },
  botao: {
    width: 100,
    height: 100,
    backgroundColor: "#250E03",
    borderRadius: 100,
  },
  textCategorias: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  linha1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "espace-between",
    width: "100%",
  },
  divbotaodirComoda: {
    marginLeft: 60,
  },
  textCategoriasComoda: {
    marginLeft: -17,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  linha2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "espace-between",
    width: "100%",
    marginTop: 20,
  },
  linha3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "espace-between",
    width: "100%",
    marginTop: 20,
  },
});
