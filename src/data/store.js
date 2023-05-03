import {reactive} from 'vue';

export const store = reactive({
  HeaderTitle:'Yu-Gi-Oh Api',
  ApiUrl:'https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=alien',
  cards:[],
})