import React from "react";
import {View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text,
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9'
const colorDarkFontGithub = '#4F565E'

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104245596?v=4';
const urlToMyGithub = 'https://github.com/amandafd';

const App = () => {
    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res) {
            console.log('Link aprovado');
            console.log('Abrindo o link...');
            Linking.openURL(urlToMyGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'#010409'} barStyle="light-content" />
            <View style={style.content}>
               <Image accessibilityLabel="Amanda em uma área externa com piscina e plantas atrás de uma grade" style={style.avatar} source={{uri: imageProfileGithub}}/> 
               <Text accessibilityLabel="Nome: Amanda Felipe Dionísio" style={[style.defaultText, style.name]}>Amanda Felipe Dionísio</Text>
               <Text accessibilityLabel="Nickname: amandafd" style={[style.defaultText, style.nickname]}>amandafd</Text>
               <Text accessibilityLabel="Descrição: Web || Mobile || UX|UI" style={[style.defaultText, style.description]}>
                    Web || Mobile || UX|UI
               </Text>
               <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in Github
                            </Text>
                    </View>
               </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        //column
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        //flexDirection: 'row',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },    
});
