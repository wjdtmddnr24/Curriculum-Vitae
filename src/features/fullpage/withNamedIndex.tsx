import { ComponentType, useEffect } from "react";
import { useFullPageStore } from "./useFullPageStore";

interface WrappedProps {
  title: string;
}

interface WithNamedIndexProps {
  title: string;
  index: number;
}

export const withNamedIndex = <P extends WrappedProps>(
  WrappedComponent: ComponentType<P>
): React.FC<P & WithNamedIndexProps> => {
  const WithNamedIndexComponent = ({ ...props }: P & WithNamedIndexProps) => {
    const { title, index } = props;
    const setMetadata = useFullPageStore((state) => state.setMetadata);
    useEffect(() => {
      setMetadata({
        title,
        index,
      });
    }, [index, title, setMetadata]);
    return <WrappedComponent {...(props as P)} />;
  };

  return WithNamedIndexComponent;
};
