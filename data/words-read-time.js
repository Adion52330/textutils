/**
 *  String#wordsReadTime() -> { characterTime, otherLanguageTime, wordTime, wordCount }
 *
 *  Get Words count from a string.
 *
 * */
const WORDS_PER_MIN = 275;
const CHINESE_KOREAN_READ_TIME = 500;

function wordsCount(string) {
  const pattern = "\\w+";
  const reg = new RegExp(pattern, "g");
  return (string.match(reg) || []).length;
}

// Chinese / Japanese / Korean
function otherLanguageReadTime(string) {
  const pattern =
    "[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]";
  const reg = new RegExp(pattern, "g");
  const count = (string.match(reg) || []).length;
  const time = count / CHINESE_KOREAN_READ_TIME;
  const formattedString = string.replace(reg, "");
  return {
    count,
    time,
    formattedString,
  };
}

function wordsReadTime(string, wordsPerMin = WORDS_PER_MIN) {
  const {
    count: characterCount,
    time: otherLanguageTime,
    formattedString,
  } = otherLanguageReadTime(string);
  const wordCount = wordsCount(formattedString);
  const wordTime = wordCount / wordsPerMin;
  return {
    characterCount,
    otherLanguageTime,
    wordTime,
    wordCount,
  };
}

export { wordsCount, otherLanguageReadTime };
export default wordsReadTime;
