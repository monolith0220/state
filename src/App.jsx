class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      sortType: "sales",
      result: [],
      isStarted: false,
      itemDetails: [],
      selectedItem: ""
    };
  }
  render() {
    return (
      <div>
        <BookSearchHeader keyword={this.state.keyword} />
        <BookSearchResult
          keyword={this.state.keyword}
          result={this.state.result}
          isStarted={this.state.isStarted}
          sortType={this.state.sortType}
          selectedItem={this.state.selectedItem}
        />
        <BookSearchDetails item={this.state.itemDetails} />
      </div>
    );
  }
}

const BookSearchHeader = () => {
  return (
    <header>
      <h1>
        BookSearch! <span>by 楽天ブックス</span>
      </h1>
      <BookSearchFormInput />
      <BookSearchFromButton />
    </header>
  );
};

const BookSearchFormInput = () => {
  return <input type="text" placeholder="キーワード" />;
};

const BookSearchFromButton = () => {
  return <button>検索</button>;
};

const BookSearchResult = () => {
  return (
    <div className="item-list">
      <BookSearchFormRadio />
      <div>
        <BookSearchItem />
        <BookSearchItem />
        <BookSearchItem />
      </div>
    </div>
  );
};

const BookSearchFormRadio = () => {
  return (
    <div>
      <label htmlFor="sales">
        <input type="radio" id="sales" name="sort" value="" />
        売れてる順
      </label>
      <label htmlFor="releaseDate">
        <input type="radio" id="releaseDate" name="sort" value="" />
        発売順
      </label>
    </div>
  );
};

const BookSearchItem = () => {
  return (
    <div className="item">
      <figure>
        <img src="" alt="本の画像" />
      </figure>
      <p>本のタイトル</p>
    </div>
  );
};

const BookSearchDetails = () => {
  return (
    <div className="item-details">
      <ul className="details-list">
        <li>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="" alt="本の画像" />
          </a>
        </li>
        <li>
          <strong>本のタイトル</strong>
        </li>
        <li>著者: 著者</li>
        <li>出版社: 出版社</li>
        <li>発売日: 発売日</li>
        <li>ISBN: ISBN</li>
        <li>評価: 評価</li>
        <li>価格: 価格</li>
        <li>本の概要</li>
        <li className="details-link">
          <a href="" target="_blank" rel="noopener noreferrer">
            購入する
          </a>
        </li>
      </ul>
    </div>
  );
};
