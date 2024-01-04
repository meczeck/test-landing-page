<template>
    <div class="max-w-2xl mx-auto mt-3 p-3 bg-white shadow-md rounded-md">
        <p class="text-md text-center text-neutral-500">If you have any further questions, please contact us
        </p>
        <!-- Header with line and phone icon -->
        <div class="flex items-center my-4">
            <div class="flex-1 border-t border-gray-400"></div>
            <div class="bg-gray-300 p-2 rounded-full w-8 h-8 flex justify-center items-center">
                <icon name="ic:baseline-phone-in-talk" />
            </div>
            <div class="flex-1 border-t border-gray-400"></div>
        </div>
        <!-- Contact details below the line in a card -->
        <div class="flex flex-col text-center">
            <h1 class="text-md font-bold">PRIME CONSULT</h1>
            <p class="text-sm">Multivision Tower 3rd Floor</p>
            <p class="text-sm">Jl. Kuningan Mulia Lot 9B</p>
            <p class="text-sm">Jakarta Selatan 12980, Indonesia</p>
            <p class="text-sm">Tel: <NuxtLink to="tel:+62-21-2938-0077" class="text-blue-500 hover:underline">
                    +62-21-2938-0077
                </NuxtLink> (Hunting)</p>
            <p class="text-sm">Fax: <NuxtLink to="tel:+62-21-2938-0078" class="text-blue-500 hover:underline">
                    +62-21-2938-0078
                </NuxtLink>
            </p>
            <p class="text-sm">Email: <NuxtLink to="mail:contact@primeconsult.co.id" class="text-blue-500 hover:underline">
                    contact@primeconsult.co.id</NuxtLink>
            </p>
        </div>
    </div>
</template>