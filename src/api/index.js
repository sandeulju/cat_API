import axios from "axios";

const config = {
  // 값들을 객체로 묶어서 체이닝으로 접근해 활용하는 방식으로 코드를 작성하는게 좋다.
  DOG: {
    API: "https://api.thedogapi.com/v1/images/search?limit={limit}",
    API_KEY:
      "live_oOXERRFZq4QYvwhBbRZxzmEQyJcjR2b4MkeR1h5LGajldjZj0J60sYzcTLpJI7uP",
  },
  CAT: {
    API: "https://api.thecatapi.com/v1/images/search?limit={limit}",
    API_KEY:
      "live_dJLGqK7t9agvEQBMG7tHlN5CsihhfVvPAPw4x6jQ3n7fGSdbsbLG2NnS3R1H5q6w",
    BREED_API:
      "https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}",
  },
};

// key가 있는 API는 API에 보내는 요청을 key로써 인증해야한다.
// 강아지 API 문서 해당 내용 : https://docs.thedogapi.com/authentication

// API url 뒤에 https://thedogapi.com/v1/images? api_key=ABC123 이렇게 바로 키를 기입하는 방식으로 인증할 수는 있지만 보안에 취약해지므로 권장하지 않는다.
// 공식 문서에 기재된 방식을 활용해 인증하였다.

// (?(물음표) 부분은 사용자 쿼리.(URL Parameter!!!!) 스티커 메모에 '차이점만 한번 훓고가기 get url, post response body' 라고 적은 개념과 관계된 부분이다.)
// 쿼리 파라미터 예시
// : https://api.thecatapi.com/v1/images/search?limit=3&page=100&order=DESC 는 '전체 컬렉션의 100페이지에서 3개의 이미지를 내림차순으로 반환합니다.' 라는 말이다.
// https://docs.thecatapi.com/pagination 링크 참고

// 설명 당시에 열람했던 링크 : 1. https://kj84.tistory.com/157 2. https://velog.io/@gillog/javaScript-URL-Parameter-%EA%B0%92-%EB%8B%A4%EB%A3%A8%EA%B8%B0
// 3. https://www.w3schools.com/tags/ref_httpmethods.asp 4. https://cocoon1787.tistory.com/526
// (Get 방식과 Post 방식의 차이점도 반드시 숙지해놓도록 하자)

export const catApi = (limit) => {
  // replace 메서드를 활용해서 유저가 원하는 수를 입력하면
  // 화면에 그만큼 데이터가 출력되게 운용할 수 있도록 코드를 작성하였다(유지보수에도 용이!).

  // replace 메서드 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  // replace 메서드는 앞에 입력한 매개변수 문자열을 뒤에 입력한 것으로 치환해준다.
  // 이를 활용해서 그냥 숫자로 기입되어 있었던 API 링크의 limit 부분을 변수로서 치환해주었다.

  const url = config.CAT.API.replace("{limit}", limit);

  return axios.get(url, { headers: { ["x-api-key"]: config.CAT.API_KEY } });
  // https://axios-http.com/kr/docs/api_intro 문서의 마지막 부분에
  // axios.get(url[, config]) 의 config 부분에 header 넣어서 api key 인증을 하였다.
};

export const dogApi = (limit) => {
  const url = config.DOG.API.replace("{limit}", limit);

  return axios.get(url, { headers: { ["x-api-key"]: config.DOG.API_KEY } });
};

// export const catBreedApi = ()
