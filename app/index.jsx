import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ButtonDefault } from "../components/ButtonDefault";
import { Footer } from "../components/Footer";
import { ActionButton } from "../components/ActionButton";
import { Timer } from "../components/Timer/index.jsx";
import { IconPause, IconPlay } from "../components/Icons";

const pomodoro = [
  { id: 1, label: "Foco", initialValue: 25 * 60, image: require('../assets/images/pomodoro.png') },
  { id: 2, label: "Pausa curta", initialValue: 5 * 60, image: require('../assets/images/short.png') },
  { id: 3, label: "Pausa longa", initialValue: 15 * 60, image: require('../assets/images/long.png') }
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const timerRef = useRef(null);


  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsTimerRunning(false);
    }
  }

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clear();
  }

  const toggleTimer = () => {
    if (timerRef.current) {
      //pausar
      clear();
      return;
    }
    setIsTimerRunning(true);
    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear();
          return timerType.initialValue;
        }
        return oldState - 1;
      })
    }, 1000);

    timerRef.current = id;
  };


  return (
    <View style={styles.container}>
      <Image
        source={timerType.image}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((item) => (
            <ActionButton
              key={item.id}
              label={item.label}
              onPress={() => toggleTimerType(item)}
              active={timerType.id === item.id}
            />
          ))}

        </View>
        <Timer
          seconds={seconds}
        />
        <ButtonDefault
          title={isTimerRunning ? "Pausar" : "Começar"}
          icon={isTimerRunning ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer} />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#021123",
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  image: {
    flex: 1,
    width: '100%',
  },

  actions: {
    padding: 32,
    backgroundColor: "#14458070",
    borderColor: "#144480",
    borderWidth: 2,
    borderRadius: 32,
    width: "100%",
    gap: 24,

  },

  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contextText: {
    color: "#FFFFFF",
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },

  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },

});
