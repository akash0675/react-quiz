import request from 'superagent';
import { setQuestions } from '../actions/homeAction';

const getQuestions = () => {
  return function(dispatch) {
    request
      .get('https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple')
      .end((err, res) => {
        if(err) {
          console.log(err);
        } else {
          // console.log(JSON.parse(res.text).results);
          dispatch(setQuestions(JSON.parse(res.text).results));
        }
      });
    }
}

export default getQuestions;
