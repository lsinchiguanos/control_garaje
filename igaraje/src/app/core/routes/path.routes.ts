/**
 * Cabeceras principales
 */
export const ROUTES_PATHS = {
  /**
   * Rutas de error
   */
  ERROR: {
    ERROR_DEFAULT: 'error',
    E404: 'error404',
    E500: 'error500',
    WORKING: 'working'
  },

  /**
   * Ruta de inicio
   */
  AUTH: {
    DEFAULT: 'auth',
    LOGIN: 'login',
    USUARIOS: 'usuarios'
  },

  /**
   * Ruta de panel de administración
   */
  PANEL: {
    /**
     * Ruta de administración
     */
    DASHBOARD: 'dashboard'
  },

  /**
   * Rutas principales de los modulos
   */
  PRINCIPALES: {
    HOME: 'home',
    BITACORA: 'bitacora',
    RESIDENTES: 'residentes',
    VEHICULO: 'vehiculo'
  },

  ACCIONES: {
    NUEVO: 'nuevo',
    MODIFICAR: 'modificar',
    LISTAR: 'listado',
    DETALLE: 'detalle',
    SUBIR: 'subir',
    GENERAR: 'generar',
    DOCUMENTO: 'documento',
    VISUALIZAR: 'visualizar',
    COMPROBAR: 'comprobar'
  },

  ESPECIALES: {
    TIPOS: 'tipos'
  }
};
