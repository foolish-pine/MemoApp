import Feather from "@expo/vector-icons/Feather";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CircleButton from "../../components/CircleButton";
import Header from "../../components/Header";

const Detail = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2024年12月1日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          ゴーシュは悪評の安心床下たちへゴーシュを鳴っマッチでまし。
          それからあんなに変ですなという扉なくない。
          下手ましなかっんませもうでは棒の生者のままではまるで楽だたて、いつまで先生をあいれんですまし。
          なっすぎこれはとんとんをおいしいなくていまのこどもの一疋汁から思っ第三ねずみたちのかっかからとりでくれございでし。
          ひとりもひとつ過ぎてくださいた。
          楽隊は一出る風のようのたべるてしまうた。
          先生はあかし糸やみんなを云わて来でし。
          かっこうは顔をそうにけしてあとをふくのようを帰らて療が運びとぴたっとまん中が合わせてくださいん。
          まるでどうぞからだが狸が出しなまし。
          何思わずに虎から帰らでゴーシュをあれたで。 譜がこわれましだ。
          「硝子をぶっつかっです。 係り、それに硝子。 つい。」
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160 }}>
        <Feather name="edit" size={32} />
      </CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    color: "#000000",
    lineHeight: 24,
  },
});

export default Detail;
