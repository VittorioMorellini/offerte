import { Route, Routes } from 'react-router-dom';
import AgenteIndex from './agente';
import AgenteDetail from './agente/detail';
import LayoutView from '../app/views/layout';
import LoginView from '../app/views/login';

export const RootView = () => {
    
    let i = 0;
    // let routes = [
    //     <Route key={i++} path="/login" element={<LoginView />} />,
    // ];

    return (
        <Routes>
            {/*routes.map(x => x)*/}
            <Route key={i++} path="/login" element={<LoginView />} />,
            <Route element={<LayoutView />}>
                <Route key={i++} path="/" element={<AgenteIndex />} />,       
                <Route key={i++} path="/agente" element={<AgenteIndex/>}  />,
                <Route key={i++} path="/agente/:id" element={<AgenteDetail/>} />,
            </Route>
        </Routes>
    );
}

// function AuthRoute(props: RouteProps) {

//     const { t } = useTranslation();
//     const { actions: appActions } = useAppActions();
//     const identity = useSelector((root: RootState) => root.app.identity);
//     const { initialized, isBusy } = useSelector((root: RootState) => root.app);
    
//     useEffect(() => { 
//         const init = async () => {
//             if (identity && !initialized) {               
//                 await appActions.init(identity);
//             }
//         }   
//         init();
//     }, [identity]);
    
//     if (!identity || identity.disabled) {
//         return <Navigate replace to="/login" />
//     }

//     if (!initialized) {
//         return (
//             <Dialog 
//                 //disableBackdropClick={true} 
//                 open={isBusy}>
//                 <DialogContent>                    
//                     <p>{t('common:loadingApplication')}</p>
//                     <LinearProgress color="primary" style={{marginBottom: '1em'}} />
//                 </DialogContent>
//             </Dialog>
//         )
//     }

//     return <Route {...props} />
//     // return (
//     //     <>
//     //         <WithBaseLayout  {...props}/>
//     //     </>
//     // )
// }

// export default function WithBaseLayout(WrappedComponent: any) {

//     const { t } = useTranslation();
//     const { actions: appActions } = useAppActions();
//     const identity = useSelector((root: RootState) => root.app.identity);
//     const { initialized, isBusy } = useSelector((root: RootState) => root.app);
    
//     useEffect(() => { 
//         const init = async () => {
//             if (identity && !initialized) {               
//                 await appActions.init(identity);
//             }
//         }   
//         init();
//     }, [identity]);
    
//     if (!identity || identity.disabled) {
//         return <Navigate replace to="/login" />
//     }

//     if (!initialized) {
//         return (
//             <Dialog 
//                 //disableBackdropClick={true} 
//                 open={isBusy}>
//                 <DialogContent>                    
//                     <p>{t('common:loadingApplication')}</p>
//                     <LinearProgress color="primary" style={{marginBottom: '1em'}} />
//                 </DialogContent>
//             </Dialog>
//         )
//     }

//     return (
//         <WrappedComponent />
//     )
// }