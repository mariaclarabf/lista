import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, Alert, StyleSheet, FlatList, Image } from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  const getImageSource = (id) => {
    switch (id) {
      case 1:
        return require('./assets/images/imagem1.jpg');
      case 2:
        return require('./assets/images/imagem2.jpg');
      case 3:
        return require('./assets/images/imagem3.jpg');
      case 4:
        return require('./assets/images/imagem4.jpg');
      case 5:
        return require('./assets/images/imagem5.jpg');
      default:
        return null;
    }
  };

  const loadBooks = () => {
    setLoading(true);

    setTimeout(() => {
      const loadedBooks = [
        { id: 1, title: 'Rápido e Devagar: Duas Formas de Pensar', autor: 'Daniel Kahneman', description: 'Em Rápido e devagar: duas formas de pensar, Daniel Kahneman nos leva a uma viagem pela mente humana e explica as duas formas de pensar: uma é rápida, intuitiva e emocional; a outra, mais lenta, deliberativa e lógica. Kahneman expõe as capacidades extraordinárias - e também os defeitos e vícios - do pensamento rápido e revela a influência das impressões intuitivas nas nossas decisões.' },
        { id: 2, title: 'O que o cérebro tem para contar: Desvendando os mistérios da natureza humana ', autor: ' V. S. Ramachandran', description: 'O que o cérebro tem para contar é Ramachandran em sua melhor forma - um guia profundamente intrigante e persuasivo para as complexidades do cérebro humano." Oliver Sacks Nesse livro surpreendente e, em muitos aspectos, perturbador, V.S. Ramachandran investiga casos neurológicos desconcertantes: pacientes que acreditam estar mortos, ou que desejam ter um membro saudável amputado, entre outros.' },
        { id: 3, title: 'Aprender a viver: Filosofia para os novos tempos', autor: 'Luc Ferry', description: 'O que é a filosofia? Para que ela serve? Durante uma viagem de férias, amigos propuseram que Luc Ferry improvisasse um curso no qual respondesse a estas perguntas de forma clara e acessível para pais e filhos leigos no assunto. Sem tempo de recorrer a nenhuma bibliografia, o filósofo viu-se obrigado a ir diretamente ao essencial, sem utilizar palavras complicadas, citações eruditas ou teorias desconhecidas dos ouvintes.' },
        { id: 4, title: 'Iludidos pelo acaso: A influência da sorte nos mercados e na vida ', autor: 'Nassim Nicholas Taleb', description: 'Às vezes a performance de um empresário de visão ou de um trader talentoso pode ser mais influenciada pelo acaso do que pela habilidade. É claro que temos a tendência de acreditar que eventos não acontecem ao acaso e tentamos encontrar razões onde nenhuma razão existe, mas este best-seller irreverente acaba com essa nossa ilusão.' },
        { id: 5, title: 'Comporte-se: A biologia humana em nosso melhor e pior', autor: ' Robert M. Sapolsky', description: 'Somos capazes de cometer atos terríveis de violência, mas também de agir de forma igualmente bondosa e empática uns para com os outros. Neste livro, Robert M. Sapolsky explora as diferentes camadas que compõem cada um dos comportamentos humanos, buscando entender como nosso cérebro evoluiu em paralelo com a cultura ― e como essa complexa dinâmica ajuda a definir os impulsos que nos moveram ao longo da história.' },
      ];
      setBooks(loadedBooks);
      setLoading(false); 
      Alert.alert('Livros Carregados', 'Lista de livros carregada com sucesso.');
    }, 2000);
  };

  const renderItem = ({ item }) => (
    <View style={styles.bookItem}>
      <View style={styles.bookImageContainer}>
        <Image
          source={getImageSource(item.id)}
          style={styles.bookImage}
        />
      </View>
      <View style={styles.bookDetails}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAutor}>{item.autor}</Text>
        <Text style={styles.bookDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Melhores livros para ler em 2024</Text>
      <Button
        title="Carregar Livros"
        onPress={loadBooks}
        color="purple" 
        accessibilityLabel="Clique aqui para carregar os livros" 
        style={styles.loadButton} 
      />
      {loading && <ActivityIndicator style={styles.loader} />}
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
    margin: 35,
    textAlign: 'center',
  },
  loader: {
    marginTop: 20,
  },
  loadButton: {
    backgroundColor: 'purple', 
    borderRadius: 20, 
    padding: 10, 
  },
  bookItem: {
    marginBottom: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  bookImageContainer: {
    marginRight: 10,
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  bookDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAutor: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 5,
  },
  bookDescription: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default App;
