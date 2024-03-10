export default function Home() {
  return (
    <div>
      <form>
        <input placeholder="법령을 검색하세요"></input>
        <button>검색</button>
        <div className="select_lan">
          <input type="radio" id="kor" name="language" />
          <label htmlFor="kor">한국어</label>
          <input type="radio" id="eng" name="language" />
          <label htmlFor="kor">Eng</label>
          <input type="radio" id="chn" name="language" />
          <label htmlFor="kor">文</label>
        </div>
      </form>
      <div className="find_Law_specific">
        <p>목록 및 카테고리로 찾기</p>
      </div>
    </div>
  );
}
