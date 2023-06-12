import React, { useEffect, useState } from 'react'
import css from '../assets/css/css'
import normalize from 'react-native-normalize';
import MyView from '../components/NativeComponents/MyView';
import ProductCard from '../components/General/ProductCard';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { allProductsRequest } from '../redux/reducer/CmsReducer';
import Header from '../components/General/Header';
import {
    StyleSheet,
    SafeAreaView,
    Dimensions,
    FlatList,
    ActivityIndicator
} from 'react-native'


let status = ''
let loading = true
const Ecommerce = (props) => {
    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const CmsReducer = useSelector(state => state.CmsReducer)

    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        dispatch(allProductsRequest())
    }, [])


    if (status === '' || CmsReducer.status !== status) {
        switch (CmsReducer.status) {
            case 'CMS/allProductsRequest':
                status = CmsReducer.status;
                loading = CmsReducer.isLoading;
                break;
            case 'CMS/allProductsSuccess':
                status = CmsReducer.status;
                setProductData(CmsReducer?.getAllProductRes)
                loading = CmsReducer.isLoading;
                setIsLoading(loading)
                // console.log(productData ,'productData 222')
                break;
            case 'CMS/allProductsFailure':
                status = CmsReducer.status;
                break;
        }
    }



    const _renderAllProducts = ({ item, index }) => {
        console.log("productData", item);
        return (
            <ProductCard
                cardStyle={styles.cardStyle}
                url={{ uri: item.image }}
                title={item.title}
                onPress={() => navigation.navigate('ProductDetails', { ...item })}
            />
        )
    }

    console.log("isLoading", isLoading);
    return (
        <MyView style={[css.f1, css.jcc, css.aic]}>
            <SafeAreaView>
                {isLoading ? <ActivityIndicator /> :
                    <MyView style={[css.f1]}>
                        <Header style={css.my3} />
                        <MyView style={[css.px3]}>
                            <FlatList
                                data={productData}
                                keyExtractor={item => item.id}
                                renderItem={_renderAllProducts}
                                numColumns={2}
                                columnWrapperStyle={css.jcsb}
                                showsVerticalScrollIndicator={false}
                            />
                        </MyView>
                    </MyView >
                }
            </SafeAreaView>
        </MyView>
    )
}

export default Ecommerce

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    cardStyle: {
        width: width / 2 - normalize(18),
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: normalize(12),
    }
})