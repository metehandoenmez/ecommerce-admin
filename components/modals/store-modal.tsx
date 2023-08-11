"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import axios from 'axios'
import {toast} from "react-hot-toast";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";





const formSchema = z.object({
  name: z.string().min(1, {message: "Store name needs to be at least 1 character long"}),
});

export const StoreModal = () => {

  const storeModal = useStoreModal();

  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      const response = await axios.post('/api/stores', values);


      toast.success('Store created.')
      
    } catch(error) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={storeModal.isOpen} onClose={storeModal.onClose} title="Create Store"
    description="Add a new store to manage products and categories">
      <div>
        <div className="space-y-4 py-2 pb-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control}
                name="name"
                render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your New E-Commerce Store Name"
                    disabled={loading}
                    {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
                />
                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                  <Button variant="outline"
                  disabled={loading}
                  onClick={storeModal.onClose}
                  >Cancel</Button>
                  <Button disabled={loading} type="submit">Continue</Button>
                </div>
              </form>
            </Form>
        </div>
      </div>
    </Modal>
  );
};

//1.45.04
