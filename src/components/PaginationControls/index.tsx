import { Pagination } from "antd";
import "./style.css";
import { useAppDispatch } from "../../hooks/hooks";
import { getCoinsWithHistory } from "../../api/coinsWithHistory";
const PaginationControls: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Pagination
        align="center"
        defaultCurrent={1}
        total={1176}
        className="pagination-controls"
        onChange={(page, pageSize) => {
          dispatch(getCoinsWithHistory({ offset: (page - 1) * 10 }));
          console.log("Страница:", page);
          console.log("Элементов на странице:", pageSize);
        }}
      />
    </>
  );
};
export default PaginationControls;
