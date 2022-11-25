import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';
import swal from 'sweetalert2';

class MenuItem {
    constructor(
        public title: string,
        public icon: string,
        public path: string,
    ) { }
}

// tslint:disable-next-line: max-classes-per-file
@Component

export default class MenuComponent extends Vue {
    public menuItems: MenuItem[] = [
        new MenuItem ('Inicio', 'home', '/Principal'),
    ];

    public menuParametros: MenuItem[] = [
        new MenuItem ('Menú', 'exit_to_app', ''),
    ];
    public menuListaParametros: MenuItem[] = [
        new MenuItem ('Demo', 'exit_to_app', '/Home'),
    ];

    public menuSalir: MenuItem[] = [
        new MenuItem ('Salir', 'exit_to_app', ''),
    ];

    public Logout() {
        swal.fire({
            title: 'Aplicacion',
            text: 'Esta seguro de salir del Sistema?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Aceptar!',
        }).then((result) => {
            if (result.value) {
                this.$store.commit('logout');
                localStorage.setItem('auth', this.$store.state.auth);
                this.$router.push({ path: '/' });
            }
        });
    }
}
