import { Button } from "antd";

const Delete = ({onDelete}) => {
    return(
        <Button type="dashed" onClick={onDelete}>Sil</Button>
    )

};
export default Delete;