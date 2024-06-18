import { motion } from 'framer-motion';
import { Header } from "../components/header";
import { Separator } from '../components/separator';
export function ConfigPage() {
   return (
      <div className='max-h-screen flex flex-col'>
         <Header homeButton />

         <div className="text-center">
            <p className="text-sm text-accent font-medium">Configurações Gerais</p>
         </div>

         <motion.div
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.2 }}
            className='flex-1'
         >

            <div className='flex-1'>
               <div>Hello World</div>
               <Separator />
               <div>Hello World</div>
            </div>

         </motion.div>
      </div>
   )
}