import * as React from 'react';
export type IconProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

function IconTemplate(svg: string): React.FunctionComponent<IconProps> {
	return (props: IconProps) => <span {...props} dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default IconTemplate;
