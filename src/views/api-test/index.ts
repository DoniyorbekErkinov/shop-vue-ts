import { ref } from "vue";
export function useNews() {
  const categories = ref<any>([
    {
      text: "World news",
      value: "world",
    },
    {
      text: "Sport news",
      value: "sport",
    },
    {
      text: "Business news",
      value: "business",
    },
    {
      text: "Science news",
      value: "science_and_technology",
    },
    {
      text: "Health news",
      value: "health",
    },
    {
      text: "Education news",
      value: "education",
    },
    {
      text: "Entertainment news",
      value: "entertainment",
    },
    {
      text: "Health news",
      value: "health",
    },
    {
      text: "Travel news",
      value: "travel",
    },
  ]);
  const limits = ref<any>([
    {
      text: 20,
      value: 20,
    },
    {
      text: 40,
      value: 40,
    },
    {
      text: 60,
      value: 60,
    },
  ]);
  return {
    categories,
    limits,
  };
}
