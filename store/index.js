const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
    return {
        auth: null,
        producto:null,
        compras:[]
    }
}
export const mutations = {
    setAuth(state, auth) {
        state.auth = auth
    },
    setProducto(state, producto){
        state.producto = producto
    },
    setCompras(state, producto){
        state.compras.push(producto)
    },
    fillCompras(state, productos){
        console.log("PRODUTOS:: ", productos)
        state.compras= productos
    }
}
export const actions = {
    nuxtServerInit({ commit }, { req }) {
        let auth = null
        let compras = []
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                auth = JSON.parse(parsed.auth)
                compras = JSON.parse(parsed.compras)
            } catch (err) {
                // No valid cookie found
            }
        }
        // console.log("Desde Cookie")
        // console.log(compras)
        commit('setAuth', auth)
        commit('fillCompras', compras)
    }
}

export const strict = false