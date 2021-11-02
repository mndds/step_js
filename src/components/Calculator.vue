<script>
import { ref } from "vue";

export const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
export const signs = ref(['+','-','*','/']);
export const result = ref('');

export const input = (char) => {
    result.value = result.value.toString();
    result.value += char;
}

export const reset = () => {
    result.value = '';
}

export const calc = () => {
    result.value = eval(result.value);
}

</script>

