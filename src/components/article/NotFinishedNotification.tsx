import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface NotFinishedNotificationProps {
  className?: string;
}

const NotFinishedNotification = ({ className }: NotFinishedNotificationProps) => {
  return (
    <div className={classNames("w-full rounded-md bg-red-400 text-white px-2 py-1", className)}>
      <FontAwesomeIcon icon={faCircleExclamation} /> &nbsp; 아직 작성이 완료되지 않았어요. 빠른 시일내에 결과물을
      보여드릴게요.
    </div>
  );
};

export default NotFinishedNotification;
