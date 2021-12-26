import { func, string } from "prop-types";

import useSWRImmutable from "swr/immutable";
import fetcher from "../../utils/fetcher";
import ErrorIndicator from "./ErrorIndicator";
import LoadingIndicator from "./LoadingIndicator";

const DataContainer = ({ endpoint, render }) => {
  const { data, error } = useSWRImmutable(endpoint, fetcher);

  if (error) return <ErrorIndicator error={error} />;
  if (!data) return <LoadingIndicator />;
  return render(data);
};

DataContainer.propTypes = {
  endpoint: string.isRequired,
  render: func.isRequired
}

export default DataContainer;
