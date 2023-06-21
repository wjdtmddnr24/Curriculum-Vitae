import { ComponentType, useEffect } from "react";
import { shallow } from "zustand/shallow";
import { useFullPageStore } from "./useFullPageStore";

interface WrappedProps {
  title: string;
}

export const withNamedIndex = <P extends WrappedProps>(WrappedComponent: ComponentType<P>): React.FC<P> => {
  const WithNamedIndexComponent = ({ ...props }: P) => {
    const { title } = props;
    const [addPageName, removePageName] = useFullPageStore(
      (state) => [state.addPageName, state.removePageName],
      shallow,
    );
    useEffect(() => {
      addPageName(title);
      return () => {
        removePageName(title);
      };
    }, [addPageName, removePageName, title]);
    return <WrappedComponent {...props} />;
  };

  return WithNamedIndexComponent;
};
