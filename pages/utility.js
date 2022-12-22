export function jumlahBilanganAsli(arr) {
  let final = { bilanganAsli: [], jumlah: 0, bukanBilanganAsli: [] }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 1) {
      final.bilanganAsli[i] = arr[i]
      final.jumlah += 1
    } else {
      final.bukanBilanganAsli.push(arr[i])
    }
  }

  return final.jumlah
}

export function fterkecil(arr) {
  let smallest = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
    }
  }

  return smallest
}

export function fterbesar(arr) {
  let largest = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]
    }
  }

  return largest
}

export function fsamaAtauLebihDariSatu(arr) {
  let final = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 1) {
      final[i] = arr[i]
    }
  }

  return final
}

export function furutkanNilai(arr) {
  let final = arr
  for (let i = 0; i < final.length; i++) {
    for (let j = 0; j < i; j++) {
      if (Number(final[i]) < Number(final[j])) {
        let temp = final[i]
        final[i] = final[j]
        final[j] = temp
      }
    }
  }
  return final
}

export function fjumlahGanjilGenap(arr) {
  let final = { ganjil: 0, genap: 0 }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      final.genap += 1
    } else {
      final.ganjil += 1
    }
  }

  return final
}

export function fkelompokGanjilGenap(arr) {
  let final = { ganjil: [], genap: [] }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      final.genap.push(arr[i])
    } else {
      final.ganjil.push(arr[i])
    }
  }

  return final
}
