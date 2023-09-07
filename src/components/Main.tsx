import { StyleSheet, View } from "react-native";
import { Routes, Route, Navigate } from "react-router-native";
import { AppBar } from "./AppBar";
import { SignIn } from "./SignIn";
import { RepositoryList } from "./RepositoryList";
import { SingleRepository } from "./RepositoryList/SingleRepository";
import { CreateReview } from "./RepositoryReview";
import { SignUp } from "./SignUp";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
    flexShrink: 1,
  },
});

export const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='*' element={<Navigate to='/' replace />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/repository/:id' element={<SingleRepository />} />
        <Route path='/review' element={<CreateReview />} />
      </Routes>
    </View>
  );
};
