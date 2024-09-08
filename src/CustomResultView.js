export const CustomResultView = ({ result, onClickLink }) => (
    <li className="sui-result">
      <div className="sui-result__header">
        <h3>
          <a
            onClick={onClickLink}
            href={result.liveurl.raw}
            dangerouslySetInnerHTML={{ __html: result.title.snippet }}
            target="_blank"
          />
        </h3>
      </div>
      <div className="sui-result__body">
        <div className="sui-result__details">
          <div class="metadata">
          <p class="text-success my-0 py-0"> {result.liveurl.raw} </p>
          <br />
            {result.type.raw} | {result.category.raw} | {result.display_date.raw}
          </div>
          <div class="description" dangerouslySetInnerHTML={{ __html: result.file_content_token.raw }} />
        </div>
      </div>
    </li>
  );
  