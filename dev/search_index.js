var documenterSearchIndex = {"docs":
[{"location":"#SHTOOLS.jl","page":"SHTOOLS.jl","title":"SHTOOLS.jl","text":"","category":"section"},{"location":"","page":"SHTOOLS.jl","title":"SHTOOLS.jl","text":"The SHTOOLS.jl package wraps SHTOOLS, the Spherical Harmonic Tools.","category":"page"},{"location":"","page":"SHTOOLS.jl","title":"SHTOOLS.jl","text":"SHTOOLS is an archive of Fortran 95 software that can be used to perform spherical harmonic transforms, multitaper spectral analyses, expansions of functions into Slepian bases, and standard operations on global gravitational and magnetic field data.","category":"page"},{"location":"#Legendre-functions","page":"SHTOOLS.jl","title":"Legendre functions","text":"","category":"section"},{"location":"#π-normalized","page":"SHTOOLS.jl","title":"4π normalized","text":"","category":"section"},{"location":"","page":"SHTOOLS.jl","title":"SHTOOLS.jl","text":"PlmBar!\nPlmBar\nPlmBar_d1!\nPlmBar_d1\nPlBar!\nPlBar\nPlBar_d1!\nPlBar_d1","category":"page"},{"location":"#SHTOOLS.PlmBar!","page":"SHTOOLS.jl","title":"SHTOOLS.PlmBar!","text":"PlmBar!(p::AbstractVector{Cdouble},\n        lmax::Integer,\n        z::Union{AbstractFloat,Integer};\n        csphase::Integer=1,\n        cnorm::Integer=0,\n        exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the 4π-normalized associated Legendre functions.\n\nSee also: PlmBar, PlmBar_d1!, PlBar!, PlmON!, PlmSchmidt!, PLegendreA!, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlmBar","page":"SHTOOLS.jl","title":"SHTOOLS.PlmBar","text":"p = PlmBar(lmax::Integer,\n           z::Union{AbstractFloat,Integer};\n           csphase::Integer=1,\n           cnorm::Integer=0,\n           exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\n\nCompute all the 4π-normalized associated Legendre functions.\n\nSee also: PlmBar!, PlmBar_d1, PlBar, PlmON, PlmSchmidt, PLegendreA, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlmBar_d1!","page":"SHTOOLS.jl","title":"SHTOOLS.PlmBar_d1!","text":"PlmBar_d1!(p::AbstractVector{Cdouble},\n           dp::AbstractVector{Cdouble}, \n           lmax::Integer,\n           z::Union{AbstractFloat,Integer};\n           csphase::Integer=1,\n           cnorm::Integer=0,\n           exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the 4π-normalized associated Legendre functions and first derivatives.\n\nSee also: PlmBar_d1, PlmBar_d1, PlBar_d1!, PlmON_d1!, PlmSchmidt_d1!, PLegendreA_d1!, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlmBar_d1","page":"SHTOOLS.jl","title":"SHTOOLS.PlmBar_d1","text":"p, dp = PlmBar_d1(lmax::Integer,\n                  z::Union{AbstractFloat,Integer};\n                  csphase::Integer=1,\n                  cnorm::Integer=0,\n                  exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\ndp::Vector{Cdouble}\n\nCompute all the 4π-normalized associated Legendre functions and first derivatives.\n\nSee also: PlmBar, PlmBar_d1!, PlBar_d1, PlmON_d1, PlmSchmidt_d1, PLegendreA_d1, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlBar!","page":"SHTOOLS.jl","title":"SHTOOLS.PlBar!","text":"PlBar!(p::AbstractVector{Cdouble},\n       lmax::Integer,\n       z::Union{AbstractFloat,Integer};\n       exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the 4π-normalized Legendre polynomials.\n\nSee also: PlBar, PlBar_d1!, PlmBar!, PlON!, PlSchmidt!, PLegendre!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlBar","page":"SHTOOLS.jl","title":"SHTOOLS.PlBar","text":"p = PlBar(lmax::Integer,\n           z::Union{AbstractFloat,Integer};\n           exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\n\nCompute all the 4π-normalized associated Legendre functions.\n\nSee also: PlBar!, PlBar_d1, PlmBar, PlON, PlSchmidt, PLegendre\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlBar_d1!","page":"SHTOOLS.jl","title":"SHTOOLS.PlBar_d1!","text":"PlBar_d1!(p::AbstractVector{Cdouble},\n           dp::AbstractVector{Cdouble}, \n           lmax::Integer,\n           z::Union{AbstractFloat,Integer};\n           exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the 4π-normalized associated Legendre functions and first derivatives.\n\nSee also: PlBar_d1, PlBar_d1, PlmBar_d1!, PlON_d1!, PlSchmidt_d1!, PLegendre_d1!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlBar_d1","page":"SHTOOLS.jl","title":"SHTOOLS.PlBar_d1","text":"p, dp = PlBar_d1(lmax::Integer,\n                  z::Union{AbstractFloat,Integer};\n                  exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\ndp::Vector{Cdouble}\n\nCompute all the 4π-normalized associated Legendre functions and first derivatives.\n\nSee also: PlBar, PlBar_d1!, PlmBar_d1, PlON_d1, PlSchmidt_d1, PLegendre_d1\n\n\n\n\n\n","category":"function"},{"location":"#Orthonormalized","page":"SHTOOLS.jl","title":"Orthonormalized","text":"","category":"section"},{"location":"","page":"SHTOOLS.jl","title":"SHTOOLS.jl","text":"PlmON!\nPlmON\nPlmON_d1!\nPlmON_d1\nPlON!\nPlON\nPlON_d1!\nPlON_d1","category":"page"},{"location":"#SHTOOLS.PlmON!","page":"SHTOOLS.jl","title":"SHTOOLS.PlmON!","text":"PlmON!(p::AbstractVector{Cdouble},\n       lmax::Integer,\n       z::Union{AbstractFloat,Integer};\n       csphase::Integer=1,\n       cnorm::Integer=0,\n       exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the orthonormalized associated Legendre functions.\n\nSee also: PlmON, PlmON_d1!, PlON!, PlmBar!, PlmSchmidt!, PLegendreA!, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlmON","page":"SHTOOLS.jl","title":"SHTOOLS.PlmON","text":"p = PlmON(lmax::Integer,\n          z::Union{AbstractFloat,Integer};\n          csphase::Integer=1,\n          cnorm::Integer=0,\n          exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\n\nCompute all the orthonormalized associated Legendre functions.\n\nSee also: PlmON!, PlmON_d1, PlON, PlmBar, PlmSchmidt, PLegendreA, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlmON_d1!","page":"SHTOOLS.jl","title":"SHTOOLS.PlmON_d1!","text":"PlmON_d1!(p::AbstractVector{Cdouble},\n          dp::AbstractVector{Cdouble}, \n          lmax::Integer,\n          z::Union{AbstractFloat,Integer};\n          csphase::Integer=1,\n          cnorm::Integer=0,\n          exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the orthonormalized associated Legendre functions and first derivatives.\n\nSee also: PlmON_d1, PlmON_d1, PlON_d1!, PlmBar_d1!, PlmSchmidt_d1!, PLegendreA_d1!, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlmON_d1","page":"SHTOOLS.jl","title":"SHTOOLS.PlmON_d1","text":"p, dp = PlmON_d1(lmax::Integer,\n                 z::Union{AbstractFloat,Integer};\n                 csphase::Integer=1,\n                 cnorm::Integer=0,\n                 exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\ndp::Vector{Cdouble}\n\nCompute all the orthonormalized associated Legendre functions and first derivatives.\n\nSee also: PlmON, PlmON_d1!, PlON_d1, PlmBar_d1, PlmSchmidt_d1, PLegendreA_d1, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlON!","page":"SHTOOLS.jl","title":"SHTOOLS.PlON!","text":"PlON!(p::AbstractVector{Cdouble},\n       lmax::Integer,\n       z::Union{AbstractFloat,Integer};\n       exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the orthonormalized associated Legendre functions.\n\nSee also: PlON, PlON_d1!, PlmON!, PlBar!, PlSchmidt!, PLegendre!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlON","page":"SHTOOLS.jl","title":"SHTOOLS.PlON","text":"p = PlON(lmax::Integer,\n          z::Union{AbstractFloat,Integer};\n          exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\n\nCompute all the orthonormalized associated Legendre functions.\n\nSee also: PlON!, PlON_d1, PlmON, PlBar, PlSchmidt, PLegendre\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlON_d1!","page":"SHTOOLS.jl","title":"SHTOOLS.PlON_d1!","text":"PlON_d1!(p::AbstractVector{Cdouble},\n          dp::AbstractVector{Cdouble}, \n          lmax::Integer,\n          z::Union{AbstractFloat,Integer};\n          exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the orthonormalized associated Legendre functions and first derivatives.\n\nSee also: PlON_d1, PlON_d1, PlmON_d1!, PlBar_d1!, PlSchmidt_d1!, PLegendre_d1!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlON_d1","page":"SHTOOLS.jl","title":"SHTOOLS.PlON_d1","text":"p, dp = PlON_d1(lmax::Integer,\n                 z::Union{AbstractFloat,Integer};\n                 exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\ndp::Vector{Cdouble}\n\nCompute all the orthonormalized associated Legendre functions and first derivatives.\n\nSee also: PlON, PlON_d1!, PlmON_d1, PlBar_d1, PlSchmidt_d1, PLegendre_d1\n\n\n\n\n\n","category":"function"},{"location":"#Schmidt-semi-normalized","page":"SHTOOLS.jl","title":"Schmidt semi-normalized","text":"","category":"section"},{"location":"","page":"SHTOOLS.jl","title":"SHTOOLS.jl","text":"PlmSchmidt!\nPlmSchmidt\nPlmSchmidt_d1!\nPlmSchmidt_d1\nPlSchmidt!\nPlSchmidt\nPlSchmidt_d1!\nPlSchmidt_d1","category":"page"},{"location":"#SHTOOLS.PlmSchmidt!","page":"SHTOOLS.jl","title":"SHTOOLS.PlmSchmidt!","text":"PlmSchmidt!(p::AbstractVector{Cdouble},\n            lmax::Integer,\n            z::Union{AbstractFloat,Integer};\n            csphase::Integer=1,\n            cnorm::Integer=0,\n            exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the Schmidt-normalized associated Legendre functions.\n\nSee also: PlmSchmidt, PlmSchmidt_d1!, PlSchmidt!, PlmBar!, PlmON!, PLegendreA!, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlmSchmidt","page":"SHTOOLS.jl","title":"SHTOOLS.PlmSchmidt","text":"p = PlmSchmidt(lmax::Integer,\n               z::Union{AbstractFloat,Integer};\n               csphase::Integer=1,\n               cnorm::Integer=0,\n               exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\n\nCompute all the Schmidt-normalized associated Legendre functions.\n\nSee also: PlmSchmidt!, PlmSchmidt_d1, PlSchmidt, PlmBar, PlmON, PLegendreA, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlmSchmidt_d1!","page":"SHTOOLS.jl","title":"SHTOOLS.PlmSchmidt_d1!","text":"PlmSchmidt_d1!(p::AbstractVector{Cdouble},\n               dp::AbstractVector{Cdouble}, \n               lmax::Integer,\n               z::Union{AbstractFloat,Integer};\n               csphase::Integer=1,\n               cnorm::Integer=0,\n               exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the Schmidt-normalized associated Legendre functions and first derivatives.\n\nSee also: PlmSchmidt_d1, PlmSchmidt_d1, PlSchmidt_d1!, PlmBar_d1!, PlmON_d1!, PLegendreA_d1!, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlmSchmidt_d1","page":"SHTOOLS.jl","title":"SHTOOLS.PlmSchmidt_d1","text":"p, dp = PlmSchmidt_d1(lmax::Integer,\n                      z::Union{AbstractFloat,Integer};\n                      csphase::Integer=1,\n                      cnorm::Integer=0,\n                      exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\ndp::Vector{Cdouble}\n\nCompute all the Schmidt-normalized associated Legendre functions and first derivatives.\n\nSee also: PlmSchmidt, PlmSchmidt_d1!, PlSchmidt_d1, PlmBar_d1, PlmON_d1, PLegendreA_d1, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlSchmidt!","page":"SHTOOLS.jl","title":"SHTOOLS.PlSchmidt!","text":"PlSchmidt!(p::AbstractVector{Cdouble},\n            lmax::Integer,\n            z::Union{AbstractFloat,Integer};\n            exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the Schmidt-normalized associated Legendre functions.\n\nSee also: PlSchmidt, PlSchmidt_d1!, PlmSchmidt!, PlBar!, PlON!, PLegendre!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlSchmidt","page":"SHTOOLS.jl","title":"SHTOOLS.PlSchmidt","text":"p = PlSchmidt(lmax::Integer,\n               z::Union{AbstractFloat,Integer};\n               exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\n\nCompute all the Schmidt-normalized associated Legendre functions.\n\nSee also: PlSchmidt!, PlSchmidt_d1, PlmSchmidt, PlBar, PlON, PLegendre\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlSchmidt_d1!","page":"SHTOOLS.jl","title":"SHTOOLS.PlSchmidt_d1!","text":"PlSchmidt_d1!(p::AbstractVector{Cdouble},\n               dp::AbstractVector{Cdouble}, \n               lmax::Integer,\n               z::Union{AbstractFloat,Integer};\n               exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the Schmidt-normalized associated Legendre functions and first derivatives.\n\nSee also: PlSchmidt_d1, PlSchmidt_d1, PlmSchmidt_d1!, PlBar_d1!, PlON_d1!, PLegendre_d1!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PlSchmidt_d1","page":"SHTOOLS.jl","title":"SHTOOLS.PlSchmidt_d1","text":"p, dp = PlSchmidt_d1(lmax::Integer,\n                      z::Union{AbstractFloat,Integer};\n                      exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\ndp::Vector{Cdouble}\n\nCompute all the Schmidt-normalized associated Legendre functions and first derivatives.\n\nSee also: PlSchmidt, PlSchmidt_d1!, PlmSchmidt_d1, PlBar_d1, PlON_d1, PLegendre_d1\n\n\n\n\n\n","category":"function"},{"location":"#Unnormalized","page":"SHTOOLS.jl","title":"Unnormalized","text":"","category":"section"},{"location":"","page":"SHTOOLS.jl","title":"SHTOOLS.jl","text":"PLegendreA!\nPLegendreA\nPLegendreA_d1!\nPLegendreA_d1\nPLegendre!\nPLegendre\nPLegendre_d1!\nPLegendre_d1","category":"page"},{"location":"#SHTOOLS.PLegendreA!","page":"SHTOOLS.jl","title":"SHTOOLS.PLegendreA!","text":"PLegendreA!(p::AbstractVector{Cdouble},\n            lmax::Integer,\n            z::Union{AbstractFloat,Integer};\n            csphase::Integer=1,\n            exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the unnormalized associated Legendre functions.\n\nSee also: PLegendreA, PLegendreA_d1!, PLegendre!, PlmBar!, PlmON!, PlmSchmidt!, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PLegendreA","page":"SHTOOLS.jl","title":"SHTOOLS.PLegendreA","text":"p = PLegendreA(lmax::Integer,\n               z::Union{AbstractFloat,Integer};\n               csphase::Integer=1,\n               exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\n\nCompute all the unnormalized associated Legendre functions.\n\nSee also: PLegendreA!, PLegendreA_d1, PLegendre, PlmBar, PlmON, PlmSchmidt, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PLegendreA_d1!","page":"SHTOOLS.jl","title":"SHTOOLS.PLegendreA_d1!","text":"PLegendreA_d1!(p::AbstractVector{Cdouble},\n               dp::AbstractVector{Cdouble}, \n               lmax::Integer,\n               z::Union{AbstractFloat,Integer};\n               csphase::Integer=1,\n               exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the unnormalized associated Legendre functions and first derivatives.\n\nSee also: PLegendreA_d1, PLegendreA_d1, PLegendre_d1!, PlmBar_d1!, PlmON_d1!, PlmSchmidt_d1!, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PLegendreA_d1","page":"SHTOOLS.jl","title":"SHTOOLS.PLegendreA_d1","text":"p, dp = PLegendreA_d1(lmax::Integer,\n                        z::Union{AbstractFloat,Integer};\n                        csphase::Integer=1,\n                        exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\ndp::Vector{Cdouble}\n\nCompute all the unnormalized associated Legendre functions and first derivatives.\n\nSee also: PLegendreA, PLegendreA_d1!, PLegendre_d1, PlmBar_d1, PlmON_d1, PlmSchmidt_d1, PlmIndex\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PLegendre!","page":"SHTOOLS.jl","title":"SHTOOLS.PLegendre!","text":"PLegendre!(p::AbstractVector{Cdouble},\n            lmax::Integer,\n            z::Union{AbstractFloat,Integer};\n            exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the unnormalized associated Legendre functions.\n\nSee also: PLegendre, PLegendre_d1!, PLegendreA!, PlBar!, PlON!, PlSchmidt!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PLegendre","page":"SHTOOLS.jl","title":"SHTOOLS.PLegendre","text":"p = PLegendre(lmax::Integer,\n               z::Union{AbstractFloat,Integer};\n               exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\n\nCompute all the unnormalized associated Legendre functions.\n\nSee also: PLegendre!, PLegendre_d1, PLegendreA, PlBar, PlON, PlSchmidt\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PLegendre_d1!","page":"SHTOOLS.jl","title":"SHTOOLS.PLegendre_d1!","text":"PLegendre_d1!(p::AbstractVector{Cdouble},\n               dp::AbstractVector{Cdouble}, \n               lmax::Integer,\n               z::Union{AbstractFloat,Integer};\n               exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nCompute all the unnormalized associated Legendre functions and first derivatives.\n\nSee also: PLegendre_d1, PLegendre_d1, PLegendreA_d1!, PlBar_d1!, PlON_d1!, PlSchmidt_d1!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.PLegendre_d1","page":"SHTOOLS.jl","title":"SHTOOLS.PLegendre_d1","text":"p, dp = PLegendre_d1(lmax::Integer,\n                        z::Union{AbstractFloat,Integer};\n                        exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\np::Vector{Cdouble}\ndp::Vector{Cdouble}\n\nCompute all the unnormalized associated Legendre functions and first derivatives.\n\nSee also: PLegendre, PLegendre_d1!, PLegendre_d1!, PlBar_d1, PlON_d1, PlSchmidt_d1\n\n\n\n\n\n","category":"function"},{"location":"#Utilities","page":"SHTOOLS.jl","title":"Utilities","text":"","category":"section"},{"location":"","page":"SHTOOLS.jl","title":"SHTOOLS.jl","text":"PlmIndex","category":"page"},{"location":"#SHTOOLS.PlmIndex","page":"SHTOOLS.jl","title":"SHTOOLS.PlmIndex","text":"index = PlmIndex(l::Integer,\n                 m::Integer)\nindex::Int\n\nCompute the index of an array of Legendre functions corresponding to degree l and angular order m.\n\n\n\n\n\n","category":"function"},{"location":"#Spherical-harmonic-transforms","page":"SHTOOLS.jl","title":"Spherical harmonic transforms","text":"","category":"section"},{"location":"#Equally-sampled-(NN)-and-equally-spaced-(N2N)-grids","page":"SHTOOLS.jl","title":"Equally sampled (N×N) and equally spaced (N×2N) grids","text":"","category":"section"},{"location":"","page":"SHTOOLS.jl","title":"SHTOOLS.jl","text":"SHExpandDH!\nSHExpandDH\nMakeGridDH!\nMakeGridDH\nSHExpandDHC!\nSHExpandDHC\nMakeGridDHC!\nMakeGridDHC\nMakeGradientDH!\nMakeGradientDH","category":"page"},{"location":"#SHTOOLS.SHExpandDH!","page":"SHTOOLS.jl","title":"SHTOOLS.SHExpandDH!","text":"cilm, lmax = SHExpandDH!(cilm::AbstractArray{Cdouble,3},\n                         griddh::AbstractArray{Cdouble,2},\n                         n::Integer;\n                         norm::Integer=1,\n                         sampling::Integer=1,\n                         csphase::Integer=1,\n                         lmax_calc::Optional{Integer}=nothing,\n                         exitstatus::Optional{Ref{<:Integer}}=nothing)\ncilm::AbstractArray{Cdouble,3}\nlmax:Int\n\ncilm, lmax = SHExpandDH!(cilm::AbstractArray{Complex{Cdouble},3},\n                         griddh::AbstractArray{Complex{Cdouble},2},\n                         n::Integer;\n                         norm::Integer=1,\n                         sampling::Integer=1,\n                         csphase::Integer=1,\n                         lmax_calc::Optional{Integer}=nothing,\n                         exitstatus::Optional{Ref{<:Integer}}=nothing)\ncilm::AbstractArray{Complex{Cdouble},3}\nlmax:Int\n\nExpand an equally sampled or equally spaced map into real or complex spherical harmonics using Driscoll and Healy’s (1994) sampling theorem.\n\nSee also: SHExpandDH, MakeGridDH!, MakeGradientDH!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.SHExpandDH","page":"SHTOOLS.jl","title":"SHTOOLS.SHExpandDH","text":"cilm, lmax = SHExpandDH(griddh::AbstractArray{Cdouble,2},\n                        n::Integer;\n                        norm::Integer=1,\n                        sampling::Integer=1,\n                        csphase::Integer=1,\n                        lmax_calc::Optional{Integer}=nothing,\n                        exitstatus::Optional{Ref{<:Integer}}=nothing)\ncilm::Array{Cdouble,3}\nlmax:Int\n\ncilm, lmax = SHExpandDH(griddh::AbstractArray{Complex{Cdouble},2},\n                        n::Integer;\n                        norm::Integer=1,\n                        sampling::Integer=1,\n                        csphase::Integer=1,\n                        lmax_calc::Optional{Integer}=nothing,\n                        exitstatus::Optional{Ref{<:Integer}}=nothing)\ncilm::Array{Complex{Cdouble},3}\nlmax:Int\n\nExpand an equally sampled or equally spaced map into real or complex spherical harmonics using Driscoll and Healy’s (1994) sampling theorem.\n\nSee also: SHExpandDH!, MakeGridDH, MakeGradientDH\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.MakeGridDH!","page":"SHTOOLS.jl","title":"SHTOOLS.MakeGridDH!","text":"MakeGridDH!(griddh::AbstractArray{Cdouble,2},\n            cilm::AbstractArray{Cdouble,3},\n            lmax::Integer;\n            norm::Integer=1,\n            sampling::Integer=1,\n            csphase::Integer=1,\n            lmax_calc::Optional{Integer}=nothing,\n            extend::Integer=0,\n            exitstatus::Optional{Ref{<:Integer}}=nothing)\ngriddh::AbstractArray{Cdouble,2}\nn::Int\n\nMakeGridDH!(griddh::AbstractArray{Complex{Cdouble},2},\n            cilm::AbstractArray{Complex{Cdouble},3},\n            lmax::Integer;\n            norm::Integer=1,\n            sampling::Integer=1,\n            csphase::Integer=1,\n            lmax_calc::Optional{Integer}=nothing,\n            extend::Integer=0,\n            exitstatus::Optional{Ref{<:Integer}}=nothing)\ngriddh::AbstractArray{Complex{Cdouble},2}\nn::Int\n\nCreate a 2D map from a set of real or complex spherical harmonic coefficients that conforms with Driscoll and Healy’s (1994) sampling theorem.\n\nSee also: SHExpandDH!, MakeGridDH, MakeGradientDH!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.MakeGridDH","page":"SHTOOLS.jl","title":"SHTOOLS.MakeGridDH","text":"MakeGridDH(cilm::AbstractArray{Cdouble,3},\n           lmax::Integer;\n           norm::Integer=1,\n           sampling::Integer=1,\n           csphase::Integer=1,\n           lmax_calc::Optional{Integer}=nothing,\n           extend::Integer=0,\n           exitstatus::Optional{Ref{<:Integer}}=nothing)\ngriddh::Array{Cdouble,2}\nn::Int\n\nMakeGridDH(cilm::AbstractArray{Complex{Cdouble},3},\n           lmax::Integer;\n           norm::Integer=1,\n           sampling::Integer=1,\n           csphase::Integer=1,\n           lmax_calc::Optional{Integer}=nothing,\n           extend::Integer=0,\n           exitstatus::Optional{Ref{<:Integer}}=nothing)\ngriddh::Array{Complex{Cdouble},2}\nn::Int\n\nCreate a 2D map from a set of real or complex spherical harmonic coefficients that conforms with Driscoll and Healy’s (1994) sampling theorem.\n\nSee also: SHExpandDH, MakeGridDH!, MakeGradientDH\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.SHExpandDHC!","page":"SHTOOLS.jl","title":"SHTOOLS.SHExpandDHC!","text":"SHExpandDHC!(...)\n\nAlias for SHExpandDH!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.SHExpandDHC","page":"SHTOOLS.jl","title":"SHTOOLS.SHExpandDHC","text":"SHExpandDHC(...)\n\nAlias for SHExpandDH\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.MakeGridDHC!","page":"SHTOOLS.jl","title":"SHTOOLS.MakeGridDHC!","text":"MakeGridDHC!(...)\n\nAlias for MakeGridDH!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.MakeGridDHC","page":"SHTOOLS.jl","title":"SHTOOLS.MakeGridDHC","text":"MakeGridDHC(...)\n\nAlias for MakeGridDH\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.MakeGradientDH!","page":"SHTOOLS.jl","title":"SHTOOLS.MakeGradientDH!","text":"MakeGradientDH!(theta::AbstractArray{Cdouble,2},\n                phi::AbstractArray{Cdouble,2},\n                cilm::AbstractArray{Cdouble,3},\n                lmax::Integer;\n                norm::Integer=1,\n                sampling::Integer=1,\n                csphase::Integer=1,\n                lmax_calc::Optional{Integer}=nothing,\n                extend::Integer=0,\n                exitstatus::Optional{Ref{<:Integer}}=nothing)\ntheta::AbstractArray{Cdouble,2}\nphi::AbstractArray{Cdouble,2}\nn::Int\n\nCompute the gradient of a scalar function and return grids of the two horizontal components that conform with Driscoll and Healy’s (1994) sampling theorem.\n\nSee also: MakeGradientDH, SHExpandDH!, MakeGridDH!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.MakeGradientDH","page":"SHTOOLS.jl","title":"SHTOOLS.MakeGradientDH","text":"MakeGradientDH(cilm::AbstractArray{Cdouble,3},\n               lmax::Integer;\n               norm::Integer=1,\n               sampling::Integer=1,\n               csphase::Integer=1,\n               lmax_calc::Optional{Integer}=nothing,\n               extend::Integer=0,\n               exitstatus::Optional{Ref{<:Integer}}=nothing)\ntheta::Array{Cdouble,2}\nphi::Array{Cdouble,2}\nn::Int\n\nCompute the gradient of a scalar function and return grids of the two horizontal components that conform with Driscoll and Healy’s (1994) sampling theorem.\n\nSee also: MakeGradientDH!, SHExpandDH, MakeGridDH\n\n\n\n\n\n","category":"function"},{"location":"#Gauss-Legendre-quadrature-grids","page":"SHTOOLS.jl","title":"Gauss-Legendre quadrature grids","text":"","category":"section"},{"location":"","page":"SHTOOLS.jl","title":"SHTOOLS.jl","text":"SHGLQ\nSHExpandGLQ\nMakeGridGLQ\nSHExpandGLQC\nMakeGridGLQC\nGLQGridCoord","category":"page"},{"location":"#Other-routines","page":"SHTOOLS.jl","title":"Other routines","text":"","category":"section"},{"location":"","page":"SHTOOLS.jl","title":"SHTOOLS.jl","text":"SHExpandLSQ\nMakeGrid2d\nMakeGridPoint\nMakeGridPointC\nSHMultiply","category":"page"},{"location":"#Spherical-harmonic-I/O,-storage,-and-conversions","page":"SHTOOLS.jl","title":"Spherical harmonic I/O, storage, and conversions","text":"","category":"section"},{"location":"#Spherical-harmonic-storage","page":"SHTOOLS.jl","title":"Spherical harmonic storage","text":"","category":"section"},{"location":"","page":"SHTOOLS.jl","title":"SHTOOLS.jl","text":"SHCilmToVector!\nSHCilmToVector\nSHVectorToCilm!\nSHVectorToCilm","category":"page"},{"location":"#SHTOOLS.SHCilmToVector!","page":"SHTOOLS.jl","title":"SHTOOLS.SHCilmToVector!","text":"SHCilmToVector!(vector::AbstractVector{Cdouble},\n                cilm::AbstractArray{Cdouble,3},\n                lmax::Integer;\n                exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nConvert a three-dimensional array of real spherical harmonic coefficients to a 1-dimensional indexed vector.\n\nSee also: SHCilmToVector\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.SHCilmToVector","page":"SHTOOLS.jl","title":"SHTOOLS.SHCilmToVector","text":"vector = SHCilmToVector(cilm::AbstractArray{Cdouble,3},\n                        lmax::Integer;\n                        exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\nvector::Vector{Cdouble}\n\nConvert a three-dimensional array of real spherical harmonic coefficients to a 1-dimensional indexed array.\n\nSee also: SHCilmToVector!\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.SHVectorToCilm!","page":"SHTOOLS.jl","title":"SHTOOLS.SHVectorToCilm!","text":"SHVectorToCilm!(cilm::AbstractArray{Cdouble,3},\n                vector::AbstractVector{Cdouble},\n                lmax::Integer;\n                exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\n\nConvert a 1-dimensional indexed vector of real spherical harmonic coefficients to a 3-dimensional array.\n\nSee also: SHVectorToCilm\n\n\n\n\n\n","category":"function"},{"location":"#SHTOOLS.SHVectorToCilm","page":"SHTOOLS.jl","title":"SHTOOLS.SHVectorToCilm","text":"cilm = SHVectorToCilm(cilm::AbstractArray{Cdouble,3},\n                      vector::AbstractVector{Cdouble},\n                      lmax::Integer;\n                      exitstatus::Union{Nothing,Ref{<:Integer}}=nothing)\ncilm::Array{Cdouble,3}\n\nConvert a 1-dimensional indexed vector of real spherical harmonic coefficients to a 3-dimensional array.\n\nSee also: SHVectorToCilm!\n\n\n\n\n\n","category":"function"},{"location":"#Spherical-harmonic-conversions","page":"SHTOOLS.jl","title":"Spherical harmonic conversions","text":"","category":"section"}]
}