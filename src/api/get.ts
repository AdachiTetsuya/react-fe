import { apiClient } from "../api/axios";

interface resultType {
  word: string;
}
export const get = async () => {
  const res = await apiClient.get("index");
  const word = res.data.word;
  console.log(word);
  return word;
};
