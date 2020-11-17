import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'

export default function RegisterForm(){

    const [show, setShow] = useState(false)
    const [showRepeat, setShowRepeat] = useState(false)
    const [form, setForm] = useState(defaultValue())


    const onSubmit = () => {
        console.log(form)
    }

    const onChange = (e, type) => {
        e.nativeEvent.text
        setForm({
            ...form,
            [type]: e.nativeEvent.text
        })
    }

    return(
        <View style={styles.formContainer} >
           <Input 
            placeholder="Correo electronico"
            containerStyle={styles.InputForm}
            onChange={(e) => onChange(e, "email")}
            rightIcon={
                <Icon 
                    type="material-community"
                    name="at"
                    iconStyle={styles.Icon}
                />
            }
            />
            <Input 
            placeholder="Contraseña"
            containerStyle={styles.InputForm}
            password={true}
            onChange={(e) => onChange(e, "password")}
            secureTextEntry={showRepeat ? false : true}
            rightIcon= {
                <Icon 
                    type='material-community'
                    name={showRepeat ? "eye-off-outline" : "eye-outline"}
                    iconStyle={styles.Icon}
                    onPress={() => setShowRepeat(!showRepeat)}
                />
            }
            />
            <Input 
            placeholder="Repetir contraseña"
            containerStyle={styles.InputForm}
            password={true}
            onChange={(e) => onChange(e, "repeatPass")}
            secureTextEntry={show ? false : true}
            rightIcon= {
                <Icon 
                    type='material-community'
                    name={show ? "eye-off-outline" : "eye-outline"}
                    iconStyle={styles.Icon}
                    onPress={() => setShow(!show)}
                />
            }
            />
            <Button
            title="Registrarse"
            style={styles.btnRegisterAdd}
            buttonStyle={styles.btnRegister}
            onPress={() => onSubmit()}
            />
        </View>
    )
}


function defaultValue(){
    return {
        email: "",
        password: "",
        repeatPass: ""
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    InputForm: {
        width: "100%",
        marginTop: 20
    },
    btnRegisterAdd: {
        marginTop: 20,
        width: "95%"
    },
    btnRegister: {
        backgroundColor: "#00a680",
        width: 100
    },
    Icon: {
        color: "#c1c1c1"
    }
})