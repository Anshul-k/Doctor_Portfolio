import { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

class GoogleMap extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                style={{ width: '100%', height: "30rem", position: 'relative' }}
                containerStyle={{ position: 'relative' }}
                zoom={17}
                initialCenter={
                    {
                        lat: 28.654782,
                        lng: 77.358880
                    }
                }
            >
                <Marker
                    title={'Kasana Homeopathic Clinic'}
                    name={'Kasana Homeopathic Clinic'}
                    position={{ lat: 28.654782, lng: 77.358880 }}
                />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apikey: process.env.Google_Map_API_KEY
})(GoogleMap)
