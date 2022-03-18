import { Acronym } from "./Model";

/**
 * Render an acronym definition with `<dl>`, `<dt>` and `<dd>` tags.
 */
function AcronymsList(props: AcronymsListProps) {
  return <>{props.acronyms.map((acronym) => SingleAcronym(acronym))}</>;
}

function SingleAcronym(acronym: Acronym) {
  return (
    <>
      <h3>{acronym.acronym}</h3>
      <dl>
        {acronym.definitions.map((definition) => (
          <>
            <dt>{definition.meaning}</dt>
            <dd>{definition.explanation || <em>No additional explanation.</em>}</dd>
          </>
        ))}
      </dl>
    </>
  );
}

type AcronymsListProps = {
  acronyms: Acronym[];
};

export default AcronymsList;
