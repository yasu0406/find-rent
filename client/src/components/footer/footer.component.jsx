import React from 'react';
import { Link } from 'react-router-dom';

import './footer.styles.scss';

const Fotter = () => (
	<footer id="footer">
		<div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p className="h6">&copy All right Reversed.<a className="ml-2" href="" target="_blank">Find</a></p>
				</div>
			</div>	
		</div>
	</footer>
);

export default Fotter;