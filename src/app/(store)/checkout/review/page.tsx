'use client'

import { Button } from '@/components/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/components/ui/card'
import { useCheckout } from '@/components/features/checkout'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function ReviewPage() {
    const { data, setCurrentStep } = useCheckout()
    const router = useRouter()

    const handleSubmit = async () => {
        try {

            toast.promise(
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const isSuccess = Math.random() > 0.2 // 80% success rate for demo
                        isSuccess ? resolve('Success') : reject('Payment failed')
                    }, 1500)
                }),
                {
                    loading: 'Processing payment...',
                    success: () => {
                        setCurrentStep(3) // Mark as completed
                        router.push('/checkout/success')
                        return (
                            <div>
                                <b>Order confirmed!</b>
                                <p className="text-sm">Card ending in {data.payment.card?.number.slice(-4)}</p>
                            </div>
                        )
                    },
                    error: (err) => <b>{err}</b>,
                }
            )
        } catch (err) {
            toast.error('Submission failed. Please try again.')
        }
    }

    const handleEdit = () => {
        setCurrentStep(1) // Return to payment step
        router.push('/checkout/payment')
    }

    return (
        <div className="max-w-md mx-auto space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Review Your Order</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Payment Summary */}
                    <div className="space-y-3">
                        <h3 className="font-medium">Payment Method</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="text-muted-foreground">Card Number</p>
                                <p>•••• •••• •••• {data.payment.card?.number.slice(-4)}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Expires</p>
                                <p>{data.payment.card?.expiry || '—'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Address (if applicable) */}
                    {data.shipping && (
                        <div className="space-y-3">
                            <h3 className="font-medium">Shipping Address</h3>
                            <div className="text-sm space-y-1">
                                <p>{data.shipping.address}</p>
                                <p>
                                    {data.shipping.city}, {data.shipping.country} {data.shipping.postalCode}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex justify-between pt-4">
                        <Button variant="outline" onClick={handleEdit}>
                            Edit Payment
                        </Button>
                        <Button className="bg-gradient-to-r from-cyan-600 to-green-500 hover:from-cyan-700
                                hover:to-green-600 transition-all" onClick={handleSubmit}>Place Order</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}