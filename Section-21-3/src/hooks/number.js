import { ref, computed, isRef, isReactive, reactive } from "vue";

export const useNumber = () => {
  let num = ref(0);
  const accounts = reactive({
    checking: 2343,
    savings: 3423,
  });

  console.log(isRef(num));
  console.log(isReactive(accounts));

  function increment() {
    num.value++;
  }

  const double = computed(() => {
    return num.value * 2;
  });

  function decrement() {
    num.value--;
  }

  return {
    num,
    increment,
    double,
  };
};
