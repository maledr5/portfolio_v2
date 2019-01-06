import React from 'react';
import ItemModal from '../components/ItemModal';
import FolioData from '../data/folio_data';

class Home extends React.Component {
	render() {
		return (
			<div id="portfoliolist">
				{this._getItems()}
			</div>
		)
	}

	_getItems() {
		const items = FolioData()
	
		return items.map( (item, id) => {
			return (
				<div className={"portfolio " + item.folioName} data-cat={item.folioName}>
					<ItemModal 
						imgSource={item.imgSource}
						smallImgSource={item.smallImgSource}
						title={item.title}
						description={item.description}
						key={id}
						class={item.class}
					/>
				</div>
			)
		});	
	}
};



export default Home
