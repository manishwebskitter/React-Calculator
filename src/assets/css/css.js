import { StyleSheet, Text, View } from 'react-native'
import normalize from 'react-native-normalize';

const css = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
    },
    border: {
        borderWidth: 1,
        borderColor: '#9BABB8',
        borderRadius: 6
    },
    bgRed: {
        backgroundColor: 'red',
    },
    w60:{
        width: '60%',
    },
    // Flex
    f1: {
        flex: 1,
    },
    row: {
        flexDirection: "row"
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: "center"
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    rowBetweenCenter: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    fWrap: {
        flexWrap: "wrap"
    },
    jcfs: {
        justifyContent: "flex-start"
    },
    jcfe: {
        justifyContent: "flex-end"
    },
    jcsb: {
        justifyContent: "space-between"
    },
    jcsa: {
        justifyContent: "space-around"
    },
    jcc: {
        justifyContent: "center"
    },
    aic: {
        alignItems: "center"
    },
    asfs: {
        alignSelf: "flex-start"
    },
    asfe: {
        alignSelf: "flex-end"
    },
    asc: {
        alignSelf: "center"
    },
    // Paddings
    p0: {
        padding: 0
    },
    p1: {
        padding: normalize(4)
    },
    p2: {
        padding: normalize(8)
    },
    p3: {
        padding: normalize(12)
    },
    p4: {
        padding: normalize(16)
    },
    p5: {
        padding: normalize(20)
    },
    p6: {
        padding: normalize(24)
    },
    p7: {
        padding: normalize(28)
    },
    p8: {
        padding: normalize(32)
    },
    p9: {
        padding: normalize(36)
    },
    p10: {
        padding: normalize(40)
    },

    pt0: {
        paddingTop: 0
    },
    pt1: {
        paddingTop: normalize(4)
    },
    pt2: {
        paddingTop: normalize(8)
    },
    pt3: {
        paddingTop: normalize(12)
    },
    pt4: {
        paddingTop: normalize(16)
    },
    pt5: {
        paddingTop: normalize(20)
    },
    pt6: {
        paddingTop: normalize(24)
    },
    pt7: {
        paddingTop: normalize(28)
    },
    pt8: {
        paddingTop: normalize(32)
    },
    pt9: {
        paddingTop: normalize(36)
    },
    pt10: {
        paddingTop: normalize(40)
    },

    pb0: {
        paddingBottom: 0
    },
    pb1: {
        paddingBottom: normalize(4)
    },
    pb2: {
        paddingBottom: normalize(8)
    },
    pb3: {
        paddingBottom: normalize(12)
    },
    pb4: {
        paddingBottom: normalize(16)
    },
    pb5: {
        paddingBottom: normalize(20)
    },
    pb6: {
        paddingBottom: normalize(24)
    },
    pb7: {
        paddingBottom: normalize(28)
    },
    pb8: {
        paddingBottom: normalize(32)
    },
    pb9: {
        paddingBottom: normalize(36)
    },
    pb10: {
        paddingBottom: normalize(40)
    },

    pl0: {
        paddingLeft: 0
    },
    pl1: {
        paddingLeft: normalize(4)
    },
    pl2: {
        paddingLeft: normalize(8)
    },
    pl3: {
        paddingLeft: normalize(12)
    },
    pl4: {
        paddingLeft: normalize(16)
    },
    pl5: {
        paddingLeft: normalize(20)
    },
    pl6: {
        paddingLeft: normalize(24)
    },
    pl7: {
        paddingLeft: normalize(28)
    },
    pl8: {
        paddingLeft: normalize(32)
    },
    pl9: {
        paddingLeft: normalize(36)
    },
    pl10: {
        paddingLeft: normalize(40)
    },

    pr0: {
        paddingRight: 0
    },
    pr1: {
        paddingRight: normalize(4)
    },
    pr2: {
        paddingRight: normalize(8)
    },
    pr3: {
        paddingRight: normalize(12)
    },
    pr4: {
        paddingRight: normalize(16)
    },
    pr5: {
        paddingRight: normalize(20)
    },
    pr6: {
        paddingRight: normalize(24)
    },
    pr7: {
        paddingRight: normalize(28)
    },
    pr8: {
        paddingRight: normalize(32)
    },
    pr9: {
        paddingRight: normalize(36)
    },
    pr10: {
        paddingRight: normalize(40)
    },

    px0: {
        paddingRight: 0
    },
    px1: {
        paddingHorizontal: normalize(4)
    },
    px2: {
        paddingHorizontal: normalize(8)
    },
    px3: {
        paddingHorizontal: normalize(12)
    },
    px4: {
        paddingHorizontal: normalize(16)
    },
    px5: {
        paddingHorizontal: normalize(20)
    },
    px6: {
        paddingHorizontal: normalize(24)
    },
    px7: {
        paddingHorizontal: normalize(28)
    },
    px8: {
        paddingHorizontal: normalize(32)
    },
    px9: {
        paddingHorizontal: normalize(36)
    },
    px10: {
        paddingHorizontal: normalize(40)
    },

    py0: {
        paddingRight: 0
    },
    py1: {
        paddingVertical: normalize(4)
    },
    py2: {
        paddingVertical: normalize(8)
    },
    py3: {
        paddingVertical: normalize(12)
    },
    py4: {
        paddingVertical: normalize(16)
    },
    py5: {
        paddingVertical: normalize(20)
    },
    py6: {
        paddingVertical: normalize(24)
    },
    py7: {
        paddingVertical: normalize(28)
    },
    py8: {
        paddingVertical: normalize(32)
    },
    py9: {
        paddingVertical: normalize(36)
    },
    py10: {
        paddingVertical: normalize(40)
    },

    // Margin

    m0: {
        margin: 0
    },
    m1: {
        margin: normalize(4)
    },
    m2: {
        margin: normalize(8)
    },
    m3: {
        margin: normalize(12)
    },
    m4: {
        margin: normalize(16)
    },
    m5: {
        margin: normalize(20)
    },
    m6: {
        margin: normalize(24)
    },
    m7: {
        margin: normalize(28)
    },
    m8: {
        margin: normalize(32)
    },
    m9: {
        margin: normalize(36)
    },
    m10: {
        margin: normalize(40)
    },

    mt0: {
        marginTop: 0
    },
    mt1: {
        marginTop: normalize(4)
    },
    mt2: {
        marginTop: normalize(8)
    },
    mt3: {
        marginTop: normalize(12)
    },
    mt4: {
        marginTop: normalize(16)
    },
    mt5: {
        marginTop: normalize(20)
    },
    mt6: {
        marginTop: normalize(24)
    },
    mt7: {
        marginTop: normalize(28)
    },
    mt8: {
        marginTop: normalize(32)
    },
    mt9: {
        marginTop: normalize(36)
    },
    mt10: {
        marginTop: normalize(40)
    },

    mb0: {
        marginBottom: 0
    },
    mb1: {
        marginBottom: normalize(4)
    },
    mb2: {
        marginBottom: normalize(8)
    },
    mb3: {
        marginBottom: normalize(12)
    },
    mb4: {
        marginBottom: normalize(16)
    },
    mb5: {
        marginBottom: normalize(20)
    },
    mb6: {
        marginBottom: normalize(24)
    },
    mb7: {
        marginBottom: normalize(28)
    },
    mb8: {
        marginBottom: normalize(32)
    },
    mb9: {
        marginBottom: normalize(36)
    },
    mb10: {
        marginBottom: normalize(40)
    },

    ml0: {
        marginLeft: 0
    },
    ml1: {
        marginLeft: normalize(4)
    },
    ml2: {
        marginLeft: normalize(8)
    },
    ml3: {
        marginLeft: normalize(12)
    },
    ml4: {
        marginLeft: normalize(16)
    },
    ml5: {
        marginLeft: normalize(20)
    },
    ml6: {
        marginLeft: normalize(24)
    },
    ml7: {
        marginLeft: normalize(28)
    },
    ml8: {
        marginLeft: normalize(32)
    },
    ml9: {
        marginLeft: normalize(36)
    },
    ml10: {
        marginLeft: normalize(40)
    },

    mr0: {
        marginRight: 0
    },
    mr1: {
        marginRight: normalize(4)
    },
    mr2: {
        marginRight: normalize(8)
    },
    mr3: {
        marginRight: normalize(12)
    },
    mr4: {
        marginRight: normalize(16)
    },
    mr5: {
        marginRight: normalize(20)
    },
    mr6: {
        marginRight: normalize(24)
    },
    mr7: {
        marginRight: normalize(28)
    },
    mr8: {
        marginRight: normalize(32)
    },
    mr9: {
        marginRight: normalize(36)
    },
    mr10: {
        marginRight: normalize(40)
    },

    mx0: {
        marginRight: 0
    },
    mx1: {
        marginHorizontal: normalize(4)
    },
    mx2: {
        marginHorizontal: normalize(8)
    },
    mx3: {
        marginHorizontal: normalize(12)
    },
    mx4: {
        marginHorizontal: normalize(16)
    },
    mx5: {
        marginHorizontal: normalize(20)
    },
    mx6: {
        marginHorizontal: normalize(24)
    },
    mx7: {
        marginHorizontal: normalize(28)
    },
    mx8: {
        marginHorizontal: normalize(32)
    },
    mx9: {
        marginHorizontal: normalize(36)
    },
    mx10: {
        marginHorizontal: normalize(40)
    },

    my0: {
        marginRight: 0
    },
    my1: {
        marginVertical: normalize(4)
    },
    my2: {
        marginVertical: normalize(8)
    },
    my3: {
        marginVertical: normalize(12)
    },
    my4: {
        marginVertical: normalize(16)
    },
    my5: {
        marginVertical: normalize(20)
    },
    my6: {
        marginVertical: normalize(24)
    },
    my7: {
        marginVertical: normalize(28)
    },
    my8: {
        marginVertical: normalize(32)
    },
    my9: {
        marginVertical: normalize(36)
    },
    my10: {
        marginVertical: normalize(40)
    },
})

export default css