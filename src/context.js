import React, {Component} from 'react';
import items from './data';
const PropertyContext = React.createContext();
//<PropertyContext.Provider.value={}
class PropertyProvider extends Component {
    state={
        properties: [],
        loading: true
    };
    // getData

    componentDidMount(){
        //this.getData
        let properties = this.formatData(items);
        this.setState({
            properties,
            loading: false
        })
    };

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let property = { ...item.fields, images, id}
            return property;
        });
        return tempItems;
    };

    getProperty = (slug) => {
        let tempProperties = [...this.state.properties];
        const property = tempProperties.find(property => property.slug === slug);
        return property;
    };

    render() {
        return (<PropertyContext.Provider 
                    value={{ ...this.state,
                        getProperty: this.getProperty
                    }}>
            {this.props.children}
            </PropertyContext.Provider>
        )
}
}

const PropertyConsumer = PropertyContext.Consumer;

export { PropertyProvider, PropertyConsumer, PropertyContext }
